import React from "react";
import {HTMLTable, InputGroup} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class EnchantedTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {}
        };
    }
    //TODO: overflow of the viewport size
    render() {
        const {headers, data, ...others} = this.props;

        const filterNames = this.getFilterNames(data);
        const filteredData = this.filter(data);
        return(
            <HTMLTable {...others}>
                <thead>
                <tr>
                    {headers.map((field, i) => (
                        <th key={`header_${i}`}>{field}</th>
                    ))}
                </tr>
                <tr>
                    {filterNames.map((field, i) => (
                        <td key={`filter_${i}`}>
                            <InputGroup
                                small
                                round
                                onChange={this.handleFilters(field)}
                            />
                        </td>
                    ))}
                </tr>
                </thead>
                <tbody>
                {filteredData.map((row, i) => (
                    <tr key={`row_${i}`}>
                        {Object.keys(row).map((field) => (
                            <td key={field}>{row[field]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </HTMLTable>
        )
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

    getFilterNames = (data) => (
        data.length > 0 ? Object.keys(data[0]) : []
    );

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
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};