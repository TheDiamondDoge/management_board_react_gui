import React from "react";

export const stringToUrlElem = (url) => (
    isUrl(url) ? (<a href={url}>Click here</a>) : url
);

let isUrl = (url) => {
    const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const regExp = new RegExp(expr);
    return url.match(regExp);
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
