import * as Yup from "yup";
import {nullableInteger, unique} from "../../util/yup-validators";
import {ValidationErrors} from "../../util/constants";


export default () => {
    Yup.addMethod(Yup.array, 'unique', unique);
    return Yup.object().shape({
       backlog: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(99999),
            })
       ),
        defects: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(99999),
            })
        ),
        quality: Yup.array().of(
            Yup.object().shape({
                objective: nullableInteger(99999),
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
            })
        ),
    })
}