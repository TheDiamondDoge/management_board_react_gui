import * as Yup from "yup";
import {ValidationErrors} from "../../../../../util/constants";

export default Yup.object().shape({
    pm: Yup.object().shape({
        comment: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
    }),
    pmo: Yup.object().shape({
        comment: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
    }),
    sales: Yup.object().shape({
        comment: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
    })
})