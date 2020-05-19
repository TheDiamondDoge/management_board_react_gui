import React from 'react';
import {Intent, Menu, MenuItem} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class ContextMenu extends React.PureComponent {
    render() {
        const {onEdit, onDelete, ...menuProps} = this.props;
        const editTitle = "Edit action";
        const deleteTitle = "Delete action";
        return (
            <>
                <Menu {...menuProps}>
                    <MenuItem
                        icon={"edit"}
                        text={editTitle}
                        onClick={onEdit}
                    />
                    <MenuItem
                        icon={"delete"}
                        intent={Intent.DANGER}
                        text={deleteTitle}
                        onClick={onDelete}
                    />
                </Menu>
            </>
        );
    }
}

ContextMenu.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};