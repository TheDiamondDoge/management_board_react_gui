import * as Yup from "yup";
import {ValidationErrors} from "../../../util/constants";

export default Yup.object().shape({
    title: Yup.string()
        .max(256, ValidationErrors.string.MAX)
        .nullable(),
    owner: Yup.string()
        .max(256, ValidationErrors.string.MAX)
        .nullable(),
});