import React from 'react';
import {Intent, Menu, MenuItem} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default function ContextMenu(props) {
    const {onEdit, onDelete, ...menuProps} = props;
    return (
        <Menu {...menuProps}>
            <MenuItem icon={"edit"}
                      text="Edit action"
                      onClick={onEdit}/>
            <MenuItem icon={"delete"}
                      intent={Intent.DANGER}
                      text="Delete action"
                      onClick={onDelete}
            />
        </Menu>
    );
}

ContextMenu.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};