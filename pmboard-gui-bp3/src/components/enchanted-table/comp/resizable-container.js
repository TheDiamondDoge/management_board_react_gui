import React from 'react';
import {Rnd} from "react-rnd";
import "./resizable-container.module.css";


export const ResizableContainer = (props) => {
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
};