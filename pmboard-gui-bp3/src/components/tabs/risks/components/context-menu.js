import React from 'react';
import {Menu, MenuItem} from "@blueprintjs/core";
import PropTypes from 'prop-types';

export default class ContextMenu extends React.PureComponent {
    render() {
        const {onEdit, ...menuProps} = this.props;
        const editLabel = "Edit 'Reported' flag";
        return (
            <Menu {...menuProps}>
                <MenuItem
                    icon={"edit"}
                    text={editLabel}
                    onClick={onEdit}
                />
            </Menu>
        )
    }
}

ContextMenu.propTypes = {
    onEdit: PropTypes.func.isRequired
};