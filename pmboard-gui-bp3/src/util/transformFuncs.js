import React from "react";

const MONTHS_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const stringToUrlElem = (url, label = "Click here") => (
    isUrl(url) ? (<a href={url} target="_blank" rel="noopener noreferrer">{label}</a>) : url
);

let isUrl = (value) => {
    const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const regExp = new RegExp(expr);
    return toStr(value).match(regExp);
};

let toStr = (value) => (
    value + ""
);

export const blcNumberToState = (num) => {
    switch (num) {
        case 1:
            return "red";
        case 5:
            return "yellow";
        case 8:
            return "green";
        default:
            return "blank"
    }
};

export const dateFormatToString = (date) => {
    if (!isDate(date)) return "";
    if (date.getTime() === new Date("1970-01-01").getTime()) return "";

    let day = date.getDate();
    let month = MONTHS_NAMES[date.getMonth()];
    let year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
};

function isDate(date) {
    return typeof date.getMonth === "function";
}

export const stringToDateFormat = (string) => {
    let [day, month, year] = string.split("-");
    return new Date(year, MONTHS_NAMES.indexOf(month), day);
};

export const nullToEmptyStr = (str) => (
    str == "null" ? "" : str
);

export const nullToNA = (value) => (
    value === null ? "N/A" : value
);

export const transformDateForInput = (str) => {
    if (!str) return null;
    try {
        return new Date(str);
    } catch (e) {
        return null;
    }
};

export const boolToYesNo = (val) => (
    val === true ? "Yes" : "No"
);


