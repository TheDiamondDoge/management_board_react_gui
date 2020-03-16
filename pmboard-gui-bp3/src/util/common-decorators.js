import React from "react";
import {dateFormatToString} from "./transform-funcs";
import {Icon, Intent} from "@blueprintjs/core";

export function arrayDecorator(arr) {
    return Array.isArray(arr) ? arr.join("; ") : arr;
}

export function dateDecorator(str) {
    if (!str) return "";
    if (str === "1970-01-01") return <ErrorDecorator/>;
    return dateFormatToString(new Date(str));
}

export function impactDecorator(value) {
    if (value == 0 || value == null) {
        return "None";
    } else if (value == -1) {
        return <ErrorDecorator/>;
    } else if (value < 6) {
        return `Low (${value})`;
    } else if (value >= 6 && value <= 10) {
        return `Moderate (${value})`;
    } else if (value > 10) {
        return `High (${value})`;
    } else {
        return "";
    }
}

export function errorDisplayDecorator(value) {
    if (value == -1 || value === "Error") {
        return <ErrorDecorator/>
    } else {
        return value;
    }
}

function ErrorDecorator({value}) {
    let displayMessage = value || "Error";
    return (
        <span style={{color: "red"}}
              title={"Check your excel file"}
        >
            <Icon icon={"warning-sign"} intent={Intent.DANGER} />
            {displayMessage}
        </span>
    )
}