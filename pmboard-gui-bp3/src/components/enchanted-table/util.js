export function getObjByLabel(label, selectedItems) {
    const empty = "(none)";
    label = label === empty ? "" : label;
    selectedItems = selectedItems || [];
    const index = selectedItems.findIndex((obj) => obj.label === label);
    return ~index ? selectedItems[index] : undefined;
}

export function removeSelectedObjByLabel(obj, arr) {
    return  arr.filter(elem => obj.label !== elem.label);
}

export function renderValue(value, decorator) {
    return decorator ? decorator(value) : value;
}