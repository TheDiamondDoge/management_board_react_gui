import {MenuItem} from "@blueprintjs/core";
import {MultiSelect} from "@blueprintjs/select";
import React from "react";
import PropTypes, {array} from "prop-types";
import Loading from "../loading-card/loading";

export default class Multiselect extends React.Component {
    componentDidMount() {
        const func = this.props.onSelectMount;
        if (func) func();
    }

    componentWillUnmount() {
        const func = this.props.onSelectUnmount;
        if (func) func();
    }

    onElementSelect = (elem) => {
        const {onItemSelect, itemsSelected} = this.props;
        if (itemsSelected && !itemsSelected.filter(item => item.id === elem.id)) {
            itemsSelected.add(elem);
            onItemSelect(itemsSelected);
        }
    };

    render() {
        const {loading, ...props} = this.props;
        if (loading) {
            return <Loading />
        } else {
            const {itemList, itemsSelected} = props;
            return (
                <MultiSelect
                    items={itemList}
                    itemRenderer={(item, {modifiers, handleClick}) =>
                        <MenuItem
                            key={item}
                            text={item}
                            onClick={handleClick}
                            active={modifiers.active}
                        />
                    }
                    selectedItems={itemsSelected}
                    onItemSelect={(elem) => {this.onElementSelect(elem)}}
                    tagRenderer={item => item.name}
                    tagInputProps={{
                        onRemove: (item) => {
                        }
                    }}
                    {...props}
                />
            );
        }
    }
}

Multiselect.propTypes = {
    onSelectMount: PropTypes.func,
    onSelectUnmount: PropTypes.func,
    itemList: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
    }).isRequired,
    itemsSelected: PropTypes.array,
    tagInputProps: PropTypes.object,
    onItemSelect: PropTypes.func,
    loading: PropTypes.bool,
};