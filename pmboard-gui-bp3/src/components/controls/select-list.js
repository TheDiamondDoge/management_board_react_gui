import React from 'react';
import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import PropTypes from "prop-types";

//TODO: Idea => If more than 2-3 elems selected - change them on "# selected". Add x button to each elem in list
export default class SelectList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            label: {
                empty: "(none)"
            }
        }
    }
    render() {
        const {isItemActive, onItemSelect, onRemove, ...other} = this.props;
        let {items, selectedItems, ...otherProps} = other;
        items = items ? items : [];
        selectedItems = selectedItems ? selectedItems : [];
        const {empty} = this.state.label;

        return (
            <MultiSelect
                {...otherProps}
                items={items}
                itemRenderer={(item, {handleClick}) =>
                    <MenuItem
                        key={item.value}
                        text={this.emptyToNone(item.label)}
                        onClick={handleClick}
                        active={selectedItems.includes(item)}
                    />
                }
                selectedItems={selectedItems}
                onItemSelect={onItemSelect}
                tagRenderer={item => item.label ? item.label : empty}
                tagInputProps={{
                    onRemove: (label) => (onRemove(this.getObjByLabel(label)))
                }}
            />
        );
    }

    getObjByLabel(label) {
        const {empty} = this.state.label;
        label = label === empty ? "" : label;
        const {selectedItems} = this.props;
        for(let i = 0; i < selectedItems.length; i++) {
            if (selectedItems[i].label === label) {
                return selectedItems[i];
            }
        }
    }

    emptyToNone(label) {
        const {empty} = this.state.label;
        return label ? label : empty;
    }
}


SelectList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string, PropTypes.bool, PropTypes.number
        ]),
        label: PropTypes.oneOfType([
            PropTypes.string, PropTypes.bool, PropTypes.number
        ])
    })),
    isItemActive: PropTypes.bool,
    selectedItems: PropTypes.arrayOf(PropTypes.any),
    onItemSelect: PropTypes.func,
    onRemove: PropTypes.func
};