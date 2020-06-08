import React from "react";
import {HTMLTable, Dialog, Classes} from "@blueprintjs/core";
import PropTypes from "prop-types";
import SortButton from "../controls/sort-button";
import {EnchantedTableColsConfig} from "../../util/custom-types";
import styles from "./enchanted-table.module.scss";
import classNames from 'classnames';
import {ResizableContainer} from "./comp/container/resizable-container";
import SelectList from "../controls/select-list/select-list";
import {SearchInput} from "../controls/search-input";
import AddEditDialog from "./comp/add-edit-dialog/add-edit-dialog";
import {removeSelectedObjByLabel, renderValue} from "./util";
import EnchantedRow from "./comp/enchanted-row/enchanted-row";
import FieldName from "../field-name/field-name";

//TODO: need to limit width of tds
//TODO: need small delay on typing in search field?
export default class EnchantedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaults: {
                noDataMessage: "No data found",
                editTableDialogTitle: "Edit table row"
            },
            filters: {},
            width: {},
            sort: {},
            editDialog: {
                isOpen: false,
            },
            rowData: {}
        };
    }

    render() {
        const {
            data, columns, className, editable, validationSchema, editDynamicInputVals, striped, interactive, bordered,
            onSubmitErrorCallback
        } = this.props;

        const tableClasses = classNames(className, styles.table_style);
        const isDialogOpen = this.state.editDialog.isOpen;
        const colsAmount = columns.length;
        let filteredData = this.filter(data);
        filteredData = this.sortData(filteredData);

        const renderFooterParam = this.getRenderFooterParams(filteredData);
        const footer = this.getFooter(renderFooterParam);
        const noDataMessage = this.props.noDataMessage || this.state.defaults.noDataMessage;
        const editTableDialogTitle = this.state.defaults.editTableDialogTitle;
        const isEditorOpen = isDialogOpen && editable;
        return (
            <div className={styles.container}>
                <div className={styles.table_container}>
                    <HTMLTable
                        striped={striped}
                        interactive={interactive}
                        bordered={bordered}
                        className={tableClasses}
                    >
                        <thead>
                        <tr>
                            {columns.map((field) => {
                                const style = this.getTdStyle(field, "header");
                                const defaultStyle = {width: style.width || ""};
                                const id = field.id;
                                const filterType = field.searchType ? field.searchType : "";
                                const headerName = classNames(`${id}_header`, styles.th_style);
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
                        {
                            filteredData.length > 0
                                ? this.getBodyRows(filteredData)
                                : <tr>
                                    <td colSpan={colsAmount}><FieldName name={noDataMessage}/></td>
                                </tr>
                        }
                        </tbody>
                    </HTMLTable>
                </div>
                <div className={styles.footer}>
                    {footer}
                </div>

                <Dialog
                    isOpen={isEditorOpen}
                    onClose={this.onDialogClose}
                    title={editTableDialogTitle}
                    className={styles.dialog}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <AddEditDialog
                            data={this.state.rowData}
                            columns={columns}
                            validationSchema={validationSchema}
                            onSubmit={this.editDialogSubmit}
                            onCancel={this.onDialogClose}
                            editDynamicInputVals={editDynamicInputVals}
                            onSubmitErrorCallback={onSubmitErrorCallback}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }

    getRenderFooterParams(data) {
        return {
            dialogOpen: this.dialogOpen,
            amount: data.length
        }
    }

    getFooter(renderFooterParam) {
        const {renderFooter} = this.props;
        return renderFooter ? renderFooter(renderFooterParam) : null;
    }

    getTdStyle(obj, type) {
        if (obj.hasOwnProperty("style")) {
            if (obj.style.hasOwnProperty(type)) {
                return obj.style[type];
            } else {
                return {};
            }
        } else {
            return {};
        }
    }

    getBodyRows(filteredData) {
        const {columns} = this.props;
        return (filteredData.map((row, i) => {
            const rowKey = `row_${i}`;
            const menu = this.getContextMenu(filteredData[i]);
            return (
                <EnchantedRow
                    key={rowKey}
                    contextMenu={menu}
                >
                    {columns.map((col) => {
                        const styles = this.getTdStyle(col, "column");
                        const colId = col.id || "";
                        const decorator = col.decorator;
                        return (
                            <td key={colId} style={styles}>
                                {renderValue(row[colId], decorator, row)}
                            </td>
                        )
                    })}
                </EnchantedRow>
            )
        }))
    }

    getFilterBar(type, id) {
        const {filterValues} = this.props;
        const {filters} = this.state;
        if (type.toLowerCase() === "input") {
            return (
                <SearchInput
                    placeholder={"Search..."}
                    onChange={this.handleInputFilters(id, "input")}
                />
            )
        } else if (type.toLowerCase() === "multiselect") {
            const items = filterValues[id];
            const selected = filters[id];
            return (
                <SelectList
                    fill
                    items={items}
                    onItemSelect={this.handleSelectFilters(id, "select")}
                    selectedItems={selected}
                    onRemove={this.onFilterRemove(id)}
                />
            )
        }
    }

    handleInputFilters(id) {
        const self = this;
        return function (e) {
            const val = e.target.value;
            self.setState((prev) => ({
                filters: {...prev.filters, [id]: val}
            }));
        }
    }

    handleSelectFilters(id) {
        const self = this;
        return function (val) {
            self.setState((prev) => {
                let prevFilters = prev.filters[id] ? prev.filters[id] : [];
                if (val && !prevFilters.includes(val)) {
                    const filtersArr = [...prevFilters, val];
                    return {
                        filters: {...prev.filters, [id]: filtersArr}
                    }
                }
            });
        }
    }

    onFilterRemove(id) {
        const self = this;
        return function (obj) {
            let filtersArr = self.state.filters[id];
            let newArr = removeSelectedObjByLabel(obj, filtersArr);
            self.setState((prev) => ({
                filters: {...prev.filters, [id]: newArr}
            }));
        }
    }

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
                    return this.includesAtLeastOne(String(row[id]), filterValues);
                });
            } else {
                result = result.filter((row) => (
                    String(row[id]).toLowerCase().includes(String(filters[id]).toLowerCase())
                ));
            }
        });

        return result;
    };

    includesAtLeastOne(str, values) {
        let count = 0;
        values.forEach((value) => {
            if (String(value).valueOf() === str.valueOf()) {
                count++;
            }
        });
        return (count > 0);
    }

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
            },
            rowData: {}
        })
    };

    editDialogSubmit = (data) => {
        this.props.onSubmit(data);
        this.onDialogClose();
    };

    getContextMenu(rowData) {
        const {contextMenu} = this.props;
        const contextMenuParams = this.getContextMenuParams(rowData)
        return contextMenu ? contextMenu(contextMenuParams) : null;
    }

    getContextMenuParams = (rowData) => (
        {
            editRow: () => {
                this.dialogOpen();
                this.setState({
                    rowData
                })
            },
            getRow: () => (rowData)
        }
    )
}

EnchantedTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
    filterValues: PropTypes.object,
    editable: PropTypes.bool,
    //TODO rename???
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
    noDataMessage: PropTypes.string,
    //Render prop: {dialogOpen: func, amount: int}
    renderFooter: PropTypes.func,
    //Render props: {editRow: func, getRow: func}
    contextMenu: PropTypes.func,
    editDynamicInputVals: PropTypes.object,
    onSubmitErrorCallback: PropTypes.func,
};

EnchantedTable.defaultProps = {
    filterValues: {},
    editable: false,
    validationSchema: {},
    onSubmit: () => {
    },
    noDataMessage: '',
    renderFooter: () => {
    },
    contextMenu: () => {
    },
    editDynamicInputVals: {},
    onSubmitErrorCallback: () => {
    },
};