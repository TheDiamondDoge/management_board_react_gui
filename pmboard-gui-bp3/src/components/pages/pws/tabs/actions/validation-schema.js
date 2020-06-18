import * as Yup from "yup";
import {ValidationErrors} from "../../../../../util/constants";

export default Yup.object().shape({
    registry: Yup.string()
        .required(ValidationErrors.REQUIRED),
    title: Yup.string()
        .max(255, ValidationErrors.string.MAX)
        .required(ValidationErrors.REQUIRED),
    owner: Yup.string()
        .max(255, ValidationErrors.string.MAX),
    state: Yup.string()
        .required(ValidationErrors.REQUIRED),
    priority: Yup.string()
        .required(ValidationErrors.REQUIRED),
});