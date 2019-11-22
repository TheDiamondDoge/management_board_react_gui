import * as Yup from "yup";
import {ValidationErrors} from "./constants";

export const nullableInteger = Yup.number()
    .integer(ValidationErrors.typeError.integer)
    .typeError(ValidationErrors.typeError.number)
    .max(99999, ValidationErrors.number.MAX)
    .nullable()
    .transform((value, originalValue) => (originalValue + "").trim() === "" ? null : value);