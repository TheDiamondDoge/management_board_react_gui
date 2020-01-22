import React from "react";
import {HTMLTable, Dialog, Classes} from "@blueprintjs/core";
import PropTypes from "prop-types";
import SortButton from "../controls/sort-button";
import {EnchantedTableColsConfig} from "../../util/custom-types";
import styles from "./enchanted-table.module.css";
import classNames from 'classnames';
import {ResizableContainer} from "./comp/container/resizable-container";
import SelectList from "../controls/select-list";
import {SearchInput} from "../controls/search-input";
import AddEditDialog from "./comp/add-edit-dialog/add-edit-dialog";

//TODO: need small delay on typing in search field?
export default class EnchantedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {},
            width: {},
            sort: {},
            editDialog: {
                isOpen: false,
            }
        };
    }

    render() {
        const {data, columns, className, filterValues, editable, validationSchema, onSubmit, ...otherProps} = this.props;
        let {renderFooter, ...others} = otherProps;
        const tableClasses = classNames(className, styles.table_style);
        const isDialogOpen = this.state.editDialog.isOpen;
        let filteredData = this.filter(data);
        filteredData = this.sortData(filteredData);
        const footer = renderFooter ? renderFooter({dialogOpen: this.dialogOpen}) : null;

        return (
            <div className={styles.container}>
                <div className={styles.table_container}>
                    <HTMLTable {...others} className={tableClasses}>
                        <thead>
                        <tr>
                            {columns.map((field) => {
                                const style = this.getTdStyle(field, "header");
                                const defaultStyle = {width: style.width || ""};
                                const id = field.id;
                                const filterType = field.searchType ? field.searchType : "";
                                const headerName = `${id}_header`;
                                return (
                                    <th
                                        key={headerName}
                                        className={headerName}
                                        style={style}
                                    >
                                        <div className={styles.header_container}>
                                            <div className={styles.header_container_name}>
                                                <ResizableContainer defaultStyle={defaultStyle}>
                                                    {
                                                        field.headerName
                                                    }
                                                    <SortButton onClick={this.handleSortClick(field.id)}/>
                                                </ResizableContainer>
                                            </div>
                                            <div className={styles.header_container_search}>
                                                {this.getFilterBar(filterType, id)}
                                            </div>
                                        </div>
                                    </th>
                                )
                            })}
                        </tr>
                        </thead>

                        <tbody>
                        {filteredData.map((row, i) => {
                            const rowKey = `row_${i}`;
                            return (
                                <tr key={rowKey}>
                                    {columns.map((col) => {
                                        const styles = this.getTdStyle(col, "column");
                                        const colId = col.id || "";
                                        const decorator = col.decorator;
                                        return (
                                            <td key={colId} style={styles}>
                                                {this.renderValue(row[colId], decorator)}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </HTMLTable>
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>
                {/*TODO: fix dialog resizing*/}
                <Dialog
                    isOpen={isDialogOpen && editable}
                    onClose={this.onDialogClose}
                    title="Edit table row"
                    className={styles.dialog}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <AddEditDialog
                            columns={columns}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            onCancel={this.onDialogClose}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }

    getTdStyle(obj, type) {
        if (obj.hasOwnProperty("style")) {
            if (obj.style.hasOwnProperty(type)) {
                return obj.style[type];
            }
        } else {
            return {};
        }
    }

    getFilterBar(type, id) {
        const {filterValues} = this.props;
        const {filters} = this.state;
        if (type.toLowerCase() === "input") {
            return (
                <SearchInput
                    placeholder={"Search..."}
                    onChange={this.handleFilters(id, "input")}
                />
            )
        } else if (type.toLowerCase() === "multiselect") {
            return (
                <SelectList
                    fill
                    items={filterValues[id]}
                    onItemSelect={this.handleFilters(id, "select")}
                    selectedItems={filters[id]}
                    onRemove={this.onFilterRemove(id)}
                />
            )
        }
    }

    handleFilters(id, filterType) {
        const self = this;
        return function (obj) {
            if (filterType === "select") {
                const val = obj;
                self.setState((prev) => {
                    let prevFilters = prev.filters[id] ? prev.filters[id] : [];
                    if (val && !prevFilters.includes(val)) {
                        const filtersArr = [...prevFilters, val];
                        return {
                            filters: {...prev.filters, [id]: filtersArr}
                        }
                    }
                });
            } else {
                const val = obj.target.value;
                self.setState((prev) => ({
                    filters: {...prev.filters, [id]: val}
                }));
            }
        }
    };

    onFilterRemove(id) {
        const self = this;
        return function (value) {
            let filtersArr = self.state.filters[id];
            let index = -1;
            filtersArr.forEach((obj, i) => {
                if (obj.value === value.value) {
                    index = i;
                }
            });

            if (index !== -1) {
                filtersArr.splice(index, 1);
                self.setState((prev) => ({
                    filters: {...prev.filters, [id]: filtersArr}
                }));
            }
        }
    };

    handleSortClick(id) {
        const self = this;
        return function (value) {
            self.setState({
                sort: {
                    type: value,
                    id,
                }
            });
        }
    }

    filter(data) {
        const {filters} = this.state;
        const keys = Object.keys(filters);

        if (keys.length === 0) return data;

        let result = data;
        keys.forEach((id) => {
            let filter = filters[id];
            if (Array.isArray(filter)) {
                if (filter.length === 0) return result;

                let filterValues = filter.map(obj => obj.value);
                result = result.filter((row) => {
                    return String(row[id]).includesWithMultiple(filterValues);
                });
            } else {
                result = result.filter((row) => (
                    String(row[id]).toLowerCase().includes(String(filters[id]).toLowerCase())
                ));
            }
        });

        return result;
    };

    sortData(data) {
        const {id, type} = this.state.sort;
        if (id && type) {
            if (type === "asc") {
                return data.sort((first, second) => (first[id] >= second[id]));
            } else if (type === "desc") {
                return data.sort((first, second) => (first[id] <= second[id]));
            }
        }

        return data;
    }

    renderValue(value, decorator) {
        return decorator ? decorator(value) : value;
    }

    dialogOpen = () => {
        this.setState({
            editDialog: {
                isOpen: true
            }
        })
    };

    onDialogClose = () => {
        this.setState({
            editDialog: {
                isOpen: false
            }
        })
    };
}

EnchantedTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
    filterValues: PropTypes.object,
    editable: PropTypes.bool,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    renderFooter: PropTypes.func
};