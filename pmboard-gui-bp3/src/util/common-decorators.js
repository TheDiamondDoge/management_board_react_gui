import {dateFormatToString} from "./transform-funcs";

export function printArray(arr) {
    return Array.isArray(arr) ? arr.join("; ") : arr;
}

export function dateDecorator(str) {
    let date;
    if (str) {
        date = new Date(str);
    }
    return date != "Invalid Date" ? dateFormatToString(new Date(str)) : date;
}