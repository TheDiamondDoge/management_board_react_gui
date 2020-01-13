import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";


export default function DialogBody(props) {
    const {data, config} = props;
    return (
        <div className={Classes.DIALOG_BODY}>

        </div>
    );
}

DialogBody.propTypes = {
    data: PropTypes.object,
    config: PropTypes.object,
};