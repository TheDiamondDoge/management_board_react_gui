import {dateFormatToString} from "./transform-funcs";

export function arrayDecorator(arr) {
    return Array.isArray(arr) ? arr.join("; ") : arr;
}

export function dateDecorator(str) {
    if (!str) return "";
    return dateFormatToString(new Date(str));
}

export function impactDecorator(value) {
    if (value == 0) {
        return "None";
    } else if (value == -1) {
        return "Error";
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