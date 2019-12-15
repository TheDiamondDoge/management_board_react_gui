import * as Yup from "yup";
import {nullableInteger, unique} from "../../util/yup-validators";


export default () => {
    Yup.addMethod(Yup.array, 'unique', unique);
    return Yup.object().shape({
        addedAfterDr1: nullableInteger(99999),
        committedAtDr1: nullableInteger(99999),
        modifiedAfterDr1: nullableInteger(99999),
        removedAfterDr1: nullableInteger(99999),
    })
}