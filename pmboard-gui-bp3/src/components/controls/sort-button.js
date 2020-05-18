import React from 'react';
import PropTypes from 'prop-types';
import {Button, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";

//TODO onClick("asc")?? refactor this: onClickAsc, onClickDesc
export default class SortButton extends React.PureComponent {
    render() {
        const {onClick} = this.props;
        const textAsc = "Sort by Asc";
        const textDesc = "Sort by Desc";
        const menu = (
            <Menu>
                <MenuItem
                    text={textAsc}
                    icon={"sort-asc"}
                    onClick={() => onClick("asc")}
                />
                <MenuItem
                    text={textDesc}
                    icon={"sort-desc"}
                    onClick={() => onClick("desc")}
                />
            </Menu>
        );

        return (
            <Popover
                content={menu}
                position={Position.RIGHT_BOTTOM}
            >
                <Button
                    icon={"sort"}
                    minimal
                />
            </Popover>
        )
    }
}

SortButton.propTypes = {
    onClick: PropTypes.func
};