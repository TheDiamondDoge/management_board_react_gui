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
        console.log("HMMMM", this.props.items);
        const {onItemSelect, onRemove, ...other} = this.props;
        let {items, selectedItems, ...otherProps} = other;
        items = items ? items : [];
        selectedItems = selectedItems ? selectedItems : [];
        const {empty} = this.state.label;


        return (
            <MultiSelect
                {...otherProps}
                items={items}
                itemRenderer={(item, {handleClick}) => {
                    const isActive = this.getObjByLabel(item.label) || false;
                    return (
                        <MenuItem
                            key={item.value}
                            text={this.emptyToNone(item.label)}
                            onClick={handleClick}
                            active={isActive}
                        />
                    )
                }
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
        const selectedItems = this.props.selectedItems || [];
        for (let i = 0; i < selectedItems.length; i++) {
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

/*TODO: ???? */

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