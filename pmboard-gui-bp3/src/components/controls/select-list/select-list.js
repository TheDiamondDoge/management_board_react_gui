import React, {useState} from 'react';
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import PropTypes from "prop-types";
import styles from "./select-list.module.scss";

//TODO: Idea => If more than 2-3 elems selected - change them on "# selected". Add x button to each elem in list
export default function SelectList(props) {
    let [emptyLabel] = useState("(none)");

    const {onItemSelect, onRemove, ...other} = props;
    let {items, selectedItems, ...otherProps} = other;
    items = items ? items : [];
    selectedItems = selectedItems ? selectedItems : [];

    return (
        <MultiSelect
            {...otherProps}
            items={items}
            itemListPredicate={(inputVal, itemArr) => {
                return itemArr.filter(item => String(item.label).toLowerCase().includes(inputVal.toLowerCase()))
            }}
            itemRenderer={(item, {handleClick}) => {
                const key = item.value;
                const text = emptyToNone(item.label);
                const isActive = getObjByLabel(item.label) || false;
                return (
                    <MenuItem
                        key={key}
                        text={text}
                        onClick={handleClick}
                        active={isActive}
                    />
                )
            }
            }
            selectedItems={selectedItems}
            onItemSelect={onItemSelect}
            noResults={<MenuItem disabled text="No results."/>}
            tagRenderer={item => emptyToNone(item.label)}
            tagInputProps={{
                onRemove: (label) => {
                    const objToRemove = getObjByLabel(label);
                    return onRemove(objToRemove);
                }
            }}
            popoverProps={{
                popoverClassName: styles.container
            }}
        />
    );

    function getObjByLabel(label) {
        label = label === emptyLabel ? "" : label;
        const selectedItems = props.selectedItems || [];
        for (let i = 0; i < selectedItems.length; i++) {
            if (String(selectedItems[i].label) === String(label)) {
                return selectedItems[i];
            }
        }
    }

    function emptyToNone(label) {
        if (label) {
            return label
        } else if (label === 0) {
            return String(label)
        } else {
            return emptyLabel;
        }
    }
}

// PropTypes.any in order to handle nulls
SelectList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.any
        ]),
        label: PropTypes.oneOfType([
            PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.any
        ])
    })),
    selectedItems: PropTypes.arrayOf(PropTypes.any),
    onItemSelect: PropTypes.func,
    onRemove: PropTypes.func
};

SelectList.defaultProps = {
    items: [],
    selectedItems: [],
    onItemSelect: () => {
    },
    onRemove: () => {
    }
};