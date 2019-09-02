import React from 'react';
import PropTypes from 'prop-types';
import {stringToUrlElem} from '../../util/transformFuncs';
import {InputGroup} from "@blueprintjs/core";

export default class FieldValue extends React.Component{
    state = {
        editMode: false,
    };

    render() {
        const { value, editMode } = this.props;
        return (
            this.getRenderField(value, editMode)
        )
    }

    getRenderField = (value, editMode) => {
        if (!editMode) {
            return <div>{stringToUrlElem(value)}</div>
        } else {
            return (
                <div>
                    <InputGroup
                        onChange={(e) => console.log(e.target.value)}
                        type="text"
                        defaultValue={value}
                    />
                </div>
            )
        }
    };
};

FieldValue.propTypes = {
    value: PropTypes.string.isRequired,
    editMode: PropTypes.bool,
};
