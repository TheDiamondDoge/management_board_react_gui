import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr, stringToUrlElem} from '../../util/transformFuncs';
import {InputGroup} from "@blueprintjs/core";

export default class FieldValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    render() {
        const {value, editMode, type} = this.props;
        return (
            this.getRenderField(value, editMode, type)
        )
    }

    getRenderField = (value, editMode, type) => {
        type = type || "text";
        if (!editMode) {
            return <div>{stringToUrlElem(nullToEmptyStr(value))}</div>
        } else {
            return (
                <div>
                    <InputGroup
                        onInput={this.props.onInput}
                        onChange={this.props.onChange}
                        type={type}
                        defaultValue={nullToEmptyStr(value)}
                    />
                </div>
            )
        }
    };
};

FieldValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.instanceOf(Date),
    ]),
    editMode: PropTypes.bool,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    type: PropTypes.string,
};
