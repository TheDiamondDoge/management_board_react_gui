import React from "react";
import {HTMLTable} from "@blueprintjs/core";
import PropTypes from "prop-types";
import SortButton from "../controls/sort-button";
import {EnchantedTableColsConfig} from "../../util/custom-types";
import styles from "./enchanted-table.module.css";
import classNames from 'classnames';
import {ResizableContainer} from "./comp/resizable-container";
import {SearchInput} from "../controls/search-input";

//TODO: add search type -> picklist
//TODO: Resize sensor (blueprint.js)
export default class EnchantedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {},
            width: {},
            sort: {}
        };
    }

    render() {
        const {data, columns, className, ...others} = this.props;
        const tableClasses = classNames(className, styles.table_style);
        let filteredData = this.filter(data);
        filteredData = this.sortData(filteredData);
        return (
            <div className={styles.table_container}>
                <HTMLTable {...others} className={tableClasses}>
                    <thead>
                    <tr>
                        {columns.map((field) => {
                            const style = this.getTdStyle(field, "header");
                            const defaultStyle = {width: style.width || ""};
                            const headerName = `${field.id}_header`;
                            return (
                                <th
                                    key={headerName}
                                    className={headerName}
                                    style={style}
                                >
                                    <div className={styles.header_label_container}>
                                        <ResizableContainer defaultStyle={defaultStyle}>
                                            {
                                                field.headerName
                                            }
                                            <SortButton onClick={this.handleSortClick(field.id)}/>
                                        </ResizableContainer>
                                    </div>
                                    <div className={styles.header_search_container}>
                                        <SearchInput onChange={this.handleFilters(field.id)}/>
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
        )
    }

    getTdStyle(obj, type) {
        if (obj.hasOwnProperty("styles")) {
            if (obj.styles.hasOwnProperty(type)) {
                return obj.styles[type];
            }
        }
    }


    handleFilters(id) {
        const self = this;
        return function (event) {
            const val = event.target.value;
            self.setState((prev) => ({
                filters: {...prev.filters, [id]: val}
            }));
        }
    }
    ;

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

    filter = (data) => {
        const {filters} = this.state;
        const keys = Object.keys(filters);

        if (keys.length === 0) return data;

        let result = data;
        keys.forEach((id) => {
            result = result.filter((row) => (
                String(row[id]).toLowerCase().includes(String(filters[id]).toLowerCase())
            ))
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
}

EnchantedTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(EnchantedTableColsConfig).isRequired,
};