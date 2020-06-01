import React from "react";
import {dateFormatToString, getIndicatorsColor} from "./transform-funcs";
import {Icon, Intent} from "@blueprintjs/core";
import Comment from "../components/comment/comment";
import StatusIndicator from "../components/status-indicator/status-indicator";
import SafeUrl from "../components/safe-url/safe-url";

export function arrayDecorator(arr) {
    return Array.isArray(arr) ? arr.join("; ") : arr;
}

export function dateDecorator(str) {
    if (!str) return "";
    if (str === "1970-01-01") return <ErrorDecorator/>;
    const date = new Date(str);
    if (date < new Date("1970-01-01")) return <ErrorDecorator/>;
    return dateFormatToString(new Date(str));
}

export function impactDecorator(value) {
    // eslint-disable-next-line eqeqeq
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

export function probabilityDecorator(value) {
    if (!value) {
        return "None";
    // eslint-disable-next-line eqeqeq
    } else if (value == -1) {
        return <ErrorDecorator/>
    } else {
        return value;
    }
}

export function errorDisplayDecorator(value) {
    // eslint-disable-next-line eqeqeq
    if (value == -1 || value === "Error") {
        return <ErrorDecorator/>
    } else {
        return value;
    }
}

export function preDecorator(value) {
    return <Comment value={value}/>
}

function ErrorDecorator({value}) {
    let displayMessage = value || "Error";
    return (
        <span
            style={{color: "red"}}
            title={"Check your excel file"}
        >
            <Icon
                icon={"warning-sign"}
                intent={Intent.DANGER}
            />
            {displayMessage}
        </span>
    )
}

export function projectNameDecorator(name) {
    const expr = new RegExp(/\s+|\./g);
    return String(name).replace(expr, "_");
}

export function healthIndicatorsDecorator(value) {
    const indicatorColor = getIndicatorsColor(value)
    return <StatusIndicator status={indicatorColor}/>
}

export function projectNameUrlDecorator(projectName, row) {
    const url = `http://localhost:3000/pws?projectId=${row.projectId}`;
    return <SafeUrl url={url} label={projectName} />
}