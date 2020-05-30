export default class RenderFieldHelper {
    constructor(fieldsObjects, validationParams) {
        this._fieldsToRender = fieldsObjects;
        this._validationParams = validationParams;
    }
    
    _allowedIf = "allowedIf";
    _notAllowedIf = "notAllowedIf";

    displayOrNot(id) {
        if (!this._fieldsToRender[id]) return false;

        if (this._fieldsToRender[id].hasOwnProperty(this._allowedIf)) {
            return this._shouldRender(this._allowedIf, id);
        } else if (this._fieldsToRender[id].hasOwnProperty(this._notAllowedIf)) {
            return this._shouldRender(this._notAllowedIf, id);
        }

        return true;
    };

    isEditable(field) {
        const editable = this._fieldsToRender[field].editable;
        if (!(editable === undefined)) {
            return this._fieldsToRender[field].editable;
        } else {
            return true;
        }
    }

    isLabelExists(id) {
        return (id in this._fieldsToRender);
    };

    getHelpObject(field) {
        return this._fieldsToRender[field].help;
    }

    //TODO get rid of this
    getFieldProps(field, value) {
        const fieldType = this._fieldsToRender[field].type ? this._fieldsToRender[field].type : "text";
        const fields = ["composite", "maintenance"];
        if (fields.includes(field)) {
            return {
                type: fieldType,
                value
            }
        } else {
            return {
                type: fieldType
            }
        }
    }

    _shouldRender(fieldOptions, id) {
        if (this._fieldsToRender[id].hasOwnProperty(fieldOptions)) {
            let fieldProps = this._fieldsToRender[id][fieldOptions];
            let props = Object.keys(fieldProps);
            for (let i = 0; i < props.length; i++) {
                const prop = props[i];
                if (this._validationParams[prop] !== undefined) {
                    for (let i = 0; i < fieldProps[prop].length; i++) {
                        if (fieldOptions === "allowedIf") {
                            if (fieldProps[prop][i] === this._validationParams[prop]) {
                                return true;
                            }
                        }

                        if (fieldOptions === "notAllowedIf") {
                            if (fieldProps[prop][i] !== this._validationParams[prop]) {
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
    }

    getLabelById = (id) => {
        if (this.isLabelExists(id)) {
            return this._fieldsToRender[id].label;
        }
    };
}