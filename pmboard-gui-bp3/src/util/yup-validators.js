import * as Yup from "yup";
import {ValidationErrors} from "./constants";

export const nullableInteger = (max) => Yup.number()
    .integer(ValidationErrors.typeError.integer)
    .typeError(ValidationErrors.typeError.number)
    .max(max, ValidationErrors.number.MAX)
    .nullable()
    .transform((value, originalValue) => (originalValue + "").trim() === "" ? null : value);

export function unique(message, mapper = a => a) {
    return this.test('unique', message, function (list) {
        return list.length === new Set(list.map(mapper)).size;
    });
}