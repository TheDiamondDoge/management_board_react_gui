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

export function getWorkingAreaWidth(viewportSizePx) {
    const sidebarWidth = 230;
    const rightMargin = 80;
    return (viewportSizePx - sidebarWidth - rightMargin);
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