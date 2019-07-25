import React from 'react';
import PropTypes from 'prop-types';

export const FieldValue = ({value}) => (
    <div>{value}</div>
);

FieldValue.propTypes = {
    value: PropTypes.string.isRequired,
};
