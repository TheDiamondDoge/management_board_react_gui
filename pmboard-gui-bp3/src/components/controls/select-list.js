import React from 'react';
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import PropTypes from "prop-types";

//TODO: Idea => If more than 2-3 elems selected - change them on "# selected". Add x button to each elem in list
export default function SelectList(props) {
    const {isItemActive,onItemSelect, onRemove, ...other} = props;
    let {items, selectedItems, ...otherProps} = other;
    items = items ? items : [];
    selectedItems = selectedItems ? selectedItems : [];

    return (
        <MultiSelect
            {...otherProps}
            items={items}
            itemRenderer={(item, {handleClick}) =>
                <MenuItem
                    key={item}
                    text={item}
                    onClick={handleClick}
                    active={selectedItems.includes(item)}
                />
            }
            selectedItems={selectedItems}
            onItemSelect={onItemSelect}
            tagRenderer={item => item}
            tagInputProps={{
                onRemove: onRemove
            }}
        />
    );
}

SelectList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    isItemActive: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.any),
    onItemSelect: PropTypes.func,
    onRemove: PropTypes.func
};