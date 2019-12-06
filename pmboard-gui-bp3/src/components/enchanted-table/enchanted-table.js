import React from "react";
import {HTMLTable, InputGroup} from "@blueprintjs/core";
import PropTypes from "prop-types";
import {Rnd} from "react-rnd";

export default class EnchantedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {},
            width: {}
        };
    }

    //TODO: overflow of the viewport size
    render() {
        const {data, columns, ...others} = this.props;

        const filteredData = this.filter(data);
        return (
            <div style={{overflowX: "auto"}}>
                <HTMLTable {...others} style={{width: "100%"}}>
                    <thead>
                    <tr>
                        {columns.map((field) => {
                            const style = this.getTdStyle(field, "header");
                            const defaultObj = {width: style.width || ""};
                            return (
                                <th
                                    key={`${field.id}_header`}
                                    className={`${field.id}_header`}
                                    style={style}
                                >
                                    <Rnd
                                        style={{
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        default={defaultObj}
                                        disableDragging
                                        enableResizing={{right: true}}
                                    >
                                        {
                                            field.headerName
                                        }
                                    </Rnd>
                                </th>
                            )
                        })}
                    </tr>
                    <tr>
                        {columns.map((field) => {
                            return (
                                <th key={`${field.id}_filter`}>
                                    <InputGroup
                                        small
                                        round
                                        leftIcon={"search-text"}
                                        onChange={this.handleFilters(field.id)}
                                    />
                                </th>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((row, i) => (
                        <tr key={`row_${i}`}>
                            {columns.map((col) => {
                                const styles = this.getTdStyle(col, "column");
                                return (
                                    <td key={col.id} style={styles}>
                                        {this.renderValue(row[col.id], col.decorator)}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    getTdStyle(obj, type) {
        if (obj.hasOwnProperty("styles")) {
            if (obj.styles.hasOwnProperty(type)) {
                console.log(obj.styles[type])
                return obj.styles[type];
            }
        }

        return {};
    }

    handleFilters(id) {
        const self = this;
        return function (event) {
            const val = event.target.value;
            self.setState((prev) => ({
                filters: {...prev.filters, [id]: val}
            }));
        }
    };

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

    renderValue(value, decorator) {
        return decorator ? decorator(value) : value;
    }
}

EnchantedTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    //TODO: Shape of this
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};