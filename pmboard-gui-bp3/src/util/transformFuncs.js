import React from "react";

const MONTHS_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const stringToUrlElem = (url) => (
    isUrl(url) ? (<a href={url}>Click here</a>) : url
);

let isUrl = (url) => {
    const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const regExp = new RegExp(expr);
    // make sure that all values will be converted to string before match()
    return (url + "").match(regExp);
};

export const blcNumberToState = (num) => {
    switch (num) {
        case 1:
            return "red";
        case 3:
            return "yellow";
        case 6:
            return "green";
        default:
            return "blank"
    }
};

export const dateFormatToString = (date) => {
    if (!date) return "";

    let day = date.getDate();
    let month = MONTHS_NAMES[date.getMonth()];
    let year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

export const stringToDateFormat = (string) => {
    let [day, month, year] = string.split("-");
    return new Date(year, MONTHS_NAMES.indexOf(month), day);
};

//TODO: This is huge UGLY workaround. TO REMOVE!!!!
export const dateToDashedString = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
};

export const nullToEmptyStr = (str) => (
    str === null ? "" : str
);
