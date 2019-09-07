import React from 'react';
import PropTypes from 'prop-types';
import {stringToUrlElem} from '../../util/transformFuncs';
import {InputGroup} from "@blueprintjs/core";

export default class FieldValue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    render() {
        const { value, editMode, onChange} = this.props;
        return (
            this.getRenderField(value, editMode, onChange)
        )
    }

    getRenderField = (value, editMode, onChange) => {
        if (!editMode) {
            return <div>{stringToUrlElem(value)}</div>
        } else {
            return (
                <div>
                    <InputGroup
                        onChange={e => onChange(e.target.value)}
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
    onChange: PropTypes.func,
};
