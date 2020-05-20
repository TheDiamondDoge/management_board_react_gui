import * as Yup from "yup";
import {ValidationErrors} from "../../util/constants";

export default Yup.object().shape({
    comments: Yup.object().shape({
        cost: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
        overall: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
        quality: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
        schedule: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
        scope: Yup.string()
            .max(256, ValidationErrors.string.MAX)
            .nullable(),
    })
});
