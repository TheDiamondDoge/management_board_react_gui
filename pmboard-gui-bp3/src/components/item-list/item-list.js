import React from "react";
import PropTypes from "prop-types";

export default function ItemList(props) {
    const {data, ...others} = props;
    return (
        <ul {...others}>
            {data.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.node).isRequired,
};