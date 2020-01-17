import React from 'react';
import PropTypes from 'prop-types';
import SelectList from "./controls/select-list";

export default function FormikSelectList (props) {
    let {formikFuncs, ...others} = props;
    formikFuncs.setFieldValue(others.name, others.selectedItems);
    return <SelectList {...others}/>
}

FormikSelectList.propTypes = {
    formikFuncs: PropTypes.shape({
        setFieldValue: PropTypes.func.isRequired
    }).isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};