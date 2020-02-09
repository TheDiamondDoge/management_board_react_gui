import React from 'react';
import {Menu, MenuItem} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default function ContextMenu(props) {
    const {onEdit, ...menuProps} = props;
    return (
        <Menu {...menuProps}>
            <MenuItem icon={"edit"}
                      text="Edit 'Reported' flag"
                      onClick={onEdit}
            />
        </Menu>
    )
}

ContextMenu.propTypes = {
    onEdit: PropTypes.func.isRequired
};