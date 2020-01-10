import React from 'react';
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import PropTypes from "prop-types";

export default function SelectList(props) {
    const {isItemActive, selectedItems, onItemSelect, onRemove, ...other} = props;
    let {items, ...otherProps} = other;
    if (!items) {
        items = [];
    }

    // console.log("PROPS", props);
    return (
        <MultiSelect
            {...otherProps}
            items={items}
            itemRenderer={(item, {modifiers, handleClick}) =>
                <MenuItem
                    key={item}
                    text={item}
                    onClick={handleClick}
                    active={isItemActive}
                    // active={this.isSelected(item)}
                />
            }
            selectedItems={selectedItems}
            onItemSelect={onItemSelect}
            tagRenderer={item => item}
            tagInputProps={{
                onRemove: onRemove
                // onRemove: (item) => {
                //     this.deleteElement(item)
                // }
            }}
        />
    );
}

SelectList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    active: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.any),
    onItemSelect: PropTypes.func,
    onRemove: PropTypes.func
};