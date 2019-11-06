import React from 'react';
import PropTypes from 'prop-types';
import {nullToEmptyStr, stringToUrlElem} from '../../util/transformFuncs';


export default class FieldValue extends React.Component {
    render() {
        const {value} = this.props;
        return (
            <div>
                {stringToUrlElem(nullToEmptyStr(value))}
            </div>
        )
    }
};

FieldValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
};
