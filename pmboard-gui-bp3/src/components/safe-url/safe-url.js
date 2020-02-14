import React from 'react';

export default function SafeUrl({url, className, label = "Click here"}) {
    if (isUrl(url)) {
        return (
            <a href={url}
               target="_blank"
               rel="noopener noreferrer"
               className={className}>
                {label}
            </a>
        )
    } else {
        return label === "Click here" ? url : label;
    }
}

let isUrl = (value) => {
    const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi;
    const regExp = new RegExp(expr);
    return String(value).match(regExp);
};