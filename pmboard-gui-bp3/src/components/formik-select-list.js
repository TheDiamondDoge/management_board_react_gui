import React from 'react';
// import PropTypes from 'prop-types';
import SelectList from "./controls/select-list";

//TODO: add <div> for errors
//TODO: Is this actually needed?
export default function FormikSelectList (props) {
    return <SelectList {...props}/>
}

FormikSelectList.propTypes = {
};