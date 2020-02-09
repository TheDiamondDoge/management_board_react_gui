import {dateFormatToString} from "./transform-funcs";

export function printArray(arr) {
    return Array.isArray(arr) ? arr.join("; ") : arr;
}

export function dateDecorator(str) {
    if (!str) return "";
    return dateFormatToString(new Date(str));
}
