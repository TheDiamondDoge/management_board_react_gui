import React from 'react';
import {InputGroup} from "@blueprintjs/core";

export const SearchInput = (props) => {
    const {onChange} = props;
    return (
        <InputGroup
            small
            round
            leftIcon={"search-text"}
            onChange={onChange}
        />
    )
};