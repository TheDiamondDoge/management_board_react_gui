import React from 'react';
import PropTypes from 'prop-types';
import {stringToUrlElem} from '../../util/transformFuncs';

export const FieldValue = ({value}) => (
    <div>{stringToUrlElem(value)}</div>
);

FieldValue.propTypes = {
    value: PropTypes.string.isRequired,
};
