export function getObjByLabel(label, selectedItems) {
    const empty = "(none)";
    label = label === empty ? "" : label;
    selectedItems = selectedItems || [];
    const index = selectedItems.findIndex((obj) => obj.label === label);
    return ~index ? selectedItems[index] : undefined;
}

export function removeSelectedObjByLabel(obj, arr) {
    const index = arr.findIndex((elem) => obj.label === elem.label);
    const tmp = arr;
    if (index !== -1) {
        tmp.splice(index, 1);
    }
    return tmp;
}

export function renderValue(value, decorator) {
    return decorator ? decorator(value) : value;
}