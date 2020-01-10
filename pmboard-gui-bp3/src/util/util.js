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

export function getDistinctValsPerRow(data) {
    if (!data.length) {
        return {};
    }

    let columnNames = Object.keys(data[0]);
    let result = {};

    data.forEach((dataRow) => {
        columnNames.forEach((colId) => {
            result[colId] = result[colId] ? result[colId] : [];
            const value = dataRow[colId];
            if (value && !~result[colId].indexOf(value)) {
                result[colId].push(value);
            }
        });
    });

    return result;
}