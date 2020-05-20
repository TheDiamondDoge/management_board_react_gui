import * as Yup from "yup";
import {nullableInteger, unique} from "../../util/yup-validators";
import {ValidationErrors} from "../../util/constants";


export default () => {
    Yup.addMethod(Yup.array, 'unique', unique);
    return Yup.object().shape({
       backlog: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(999999),
                comment: Yup.string()
                    .max(256, ValidationErrors.string.MAX)
                    .nullable()
            })
       ),
        defects: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(999999),
                comment: Yup.string()
                    .max(256, ValidationErrors.string.MAX)
                    .nullable()
            })
        ),
        quality: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(999999),
                comment: Yup.string()
                    .max(256, ValidationErrors.string.MAX)
                    .nullable()
            })
        ),
        testExecution: Yup.array().of(
            Yup.object().shape({
                actual: Yup.string()
                    .max(512, ValidationErrors.string.MAX)
                    .nullable(),
                objective: Yup.string()
                    .max(6, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string()
                    .max(256, ValidationErrors.string.MAX)
                    .nullable()
            })
        ),
        testRate: Yup.array().of(
            Yup.object().shape({
                actual: Yup.string()
                    .max(512, ValidationErrors.string.MAX)
                    .nullable(),
                objective: Yup.string()
                    .max(6, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string()
                    .max(256, ValidationErrors.string.MAX)
                    .nullable()
            })
        ),
    })
}