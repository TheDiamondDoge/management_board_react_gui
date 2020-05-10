import {boolToYesNo, dateFormatToString} from "./transform-funcs";
import {isBoolean, picklistObjectsCompare} from "./comparators";

export function formikFieldHandleChange(form) {
    return function (name) {
        return function (value) {
            form.setFieldValue(name, value);
        }
    }
}

export function getPropFromStringPath(obj, path) {
    let editedPath = path.replace(/]/g, "");
    let arr = editedPath.split(/[.[]/);
    try {
        let tmpVal = obj;
        for (let i = 0; i < arr.length; i++) {
            tmpVal = tmpVal[arr[i]];
        }
        return tmpVal;
    } catch (e) {
        return undefined;
    }
}

export function createEnchantedTableFilters(data) {
    if (!data.length) {
        return {};
    }

    let columnNames = Object.keys(data[0]);
    let result = {};

    data.forEach((dataRow) => {
        columnNames.forEach((colId) => {
            if (null == dataRow[colId]) return true;

            result[colId] = result[colId] ? result[colId] : [];
            const value = dataRow[colId];
            if (!~result[colId].findIndex((obj) => obj.value === value)) {
                const label = getLabel(value);
                result[colId].push({value: value, label: label});
            }
        });
    });

    Object.keys(result).forEach((filter) => result[filter].sort(picklistObjectsCompare));

    return result;
}

function getLabel(value) {
    if (isBoolean(value)) {
        return boolToYesNo(value);
    } else if (/\d{4}-\d{2}-\d{2}/.test(value)) {
        return dateFormatToString(new Date(value));
    } else {
        return value;
    }
}

export function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return  urlParams.get(param);
}

export function getQuillModuleToolbar() {
    return [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{'color': []}, {'background': []}],              // dropdown with defaults from theme
        [{'size': ['small', false, 'large', 'huge']}],    // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['blockquote', 'code-block'],
        [{'header': 1}, {'header': 2}],                   // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],         // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],             // outdent/indent
        [{'direction': 'rtl'}],                           // text direction
        [{'font': []}],
        [{'align': []}],
        ['link'],
        ['clean']                                         // remove formatting button
    ];
}

export const isUrl = (value) => {
    if (typeof value === "string") {
        const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi;
        const regExp = new RegExp(expr);
        return !!String(value).match(regExp);
    } else {
        return false;
    }
};