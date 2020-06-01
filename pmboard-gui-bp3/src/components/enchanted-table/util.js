export function getObjByLabel(label, selectedItems) {
    const empty = "(none)";
    label = label === empty ? "" : label;
    selectedItems = selectedItems || [];
    const index = selectedItems.findIndex((obj) => obj.label === label);
    return ~index ? selectedItems[index] : undefined;
}

export function removeSelectedObjByLabel(obj, arr) {
    return  arr.filter(elem => String(obj.label) !== String(elem.label));
}

export function renderValue(value, decorator, row) {
    return decorator ? decorator(value, row) : value;
}