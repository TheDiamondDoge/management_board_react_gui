import React from 'react';
import {Rnd} from "react-rnd";
import PropTypes from "prop-types";
import "./resizable-container.module.scss";


export const ResizableContainer = React.memo((props) => {
    const {defaultStyle, children, ...others} = props;
    return (
        <Rnd
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            default={defaultStyle}
            disableDragging
            enableResizing={{right: true}}
            {...others}
        >
            {children}
        </Rnd>
    )
});

ResizableContainer.propTypes = {
    defaultStyle: PropTypes.object,
};