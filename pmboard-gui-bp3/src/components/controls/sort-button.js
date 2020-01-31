import React from 'react';
import PropTypes from 'prop-types';
import {Button, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";

export default function SortButton(props) {
    const {onClick} = props;
    const menu = (
        <Menu>
            <MenuItem text={"Sort by Asc"} icon={"sort-asc"} onClick={() => onClick("asc")}/>
            <MenuItem text={"Sort by Desc"} icon={"sort-desc"} onClick={() => onClick("desc")}/>
        </Menu>
    );

    return (
        <Popover content={menu} position={Position.RIGHT_BOTTOM}>
            <Button icon={"sort"} minimal/>
        </Popover>
    )
}

SortButton.propTypes = {
    onClick: PropTypes.func
};