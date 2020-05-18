import React from 'react';
import PropTypes from 'prop-types';
import {InputGroup} from "@blueprintjs/core";

export const SearchInput = React.memo((props) => {
    const {onChange, ...otherProps} = props;
    return (
        <InputGroup
            round
            leftIcon={"search-text"}
            onChange={onChange}
            {...otherProps}
        />
    )
});

SearchInput.propTypes = {
    onChange: PropTypes.func,
};

SearchInput.defaultProps = {
    onChange: () => {}
};