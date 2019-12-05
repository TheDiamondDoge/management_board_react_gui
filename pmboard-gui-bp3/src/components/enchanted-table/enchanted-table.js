import React from "react";
import {HTMLTable, InputGroup} from "@blueprintjs/core";
import PropTypes from "prop-types";

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
                            return(
                            <th
                                key={`${field.id}_header`}
                                className={`${field.id}_header`}
                                style={style}
                            >
                                {
                                    field.headerName
                                }
                            </th>
                        )})}
                    </tr>
                    <tr>
                        {columns.map((field) => (
                            <td key={`${field.id}_filter`}>
                                <InputGroup
                                    small
                                    round
                                    onChange={this.handleFilters(field.id)}
                                />
                            </td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((row, i) => (
                        <tr key={`row_${i}`}>
                            {columns.map((col) => (
                                <td key={col.id}>{row[col.id]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    getTdStyle(obj, type) {
        if (obj.hasOwnProperty("styles")){
            if (obj.styles.hasOwnProperty(type)) {
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
}

EnchantedTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    //TODO: Shape of this
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};