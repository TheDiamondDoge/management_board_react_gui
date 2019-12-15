import * as Yup from "yup";
import {nullableInteger, unique} from "../../util/yup-validators";


export default () => {
    Yup.addMethod(Yup.array, 'unique', unique);
    return Yup.object().shape({
       backlog: Yup.array().of(
            Yup.object().shape({
                actual: nullableInteger(99999),
                objective: nullableInteger(99999),
            })
       ),
        defects: Yup.array().of(
            Yup.object().shape({
                actual: nullableInteger(99999),
                objective: nullableInteger(99999),
            })
        ),
        quality: Yup.array().of(
            Yup.object().shape({
                actual: nullableInteger(99999),
                objective: nullableInteger(99999),
            })
        ),
        testExecution: Yup.array().of(
            Yup.object().shape({
                actual: nullableInteger(99999),
                objective: nullableInteger(99999),
            })
        ),
        testRate: Yup.array().of(
            Yup.object().shape({
                actual: nullableInteger(99999),
                objective: nullableInteger(99999),
            })
        ),
    })
}