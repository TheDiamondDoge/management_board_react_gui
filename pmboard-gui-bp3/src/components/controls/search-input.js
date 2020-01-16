import React from 'react';
import {InputGroup} from "@blueprintjs/core";

export const SearchInput = (props) => {
    const {onChange, ...otherProps} = props;
    return (
        <InputGroup
            round
            leftIcon={"search-text"}
            onChange={onChange}
            {...otherProps}
        />
    )
};