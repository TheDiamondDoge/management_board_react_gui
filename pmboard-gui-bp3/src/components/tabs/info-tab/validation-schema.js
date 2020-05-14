import * as Yup from "yup";
import {ValidationErrors} from "../../../util/constants";
import {nullableInteger, unique} from "../../../util/yup-validators";


export default () => {
    Yup.addMethod(Yup.array, 'unique', unique);
    return Yup.object().shape({
        general: Yup.object().shape({
            oemPartner: Yup.string()
                .max(256, ValidationErrors.string.MAX)
                .nullable(),
            keyCustomers: Yup.string()
                .max(256, ValidationErrors.string.MAX)
                .nullable(),
            productRelease: Yup.string()
                .max(45, ValidationErrors.string.MAX)
                .nullable(),
            projectType: Yup.string()
                .max(10, ValidationErrors.string.MAX)
                .nullable(),
            projectRigor: Yup.string()
                .max(10, ValidationErrors.string.MAX)
                .nullable(),
            projectState: Yup.string()
                .max(10, ValidationErrors.string.MAX)
                .nullable(),
            businessDivision: Yup.string()
                .max(10, ValidationErrors.string.MAX)
                .nullable(),
            businessUnit: Yup.string()
                .max(10, ValidationErrors.string.MAX)
                .nullable(),
            productLine: Yup.string()
                .max(45, ValidationErrors.string.MAX)
                .nullable(),
            productName: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            sponsor: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            businessLineManager: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            productLineManager: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            projectManager: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            charter: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            orBusinessPlan: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            updatedBusinessPlan: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
                    .nullable(),
            }),
            drChecklist: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
                    .nullable(),
            }),
            lessonsLearned: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
                    .nullable(),
            }),
            projectPlan: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
                    .nullable(),
            }),
            launchingPlan: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX)
                    .nullable(),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
                    .nullable(),
            }),
            metricsScope: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            rqRelease: Yup.string()
                .max(100, ValidationErrors.string.MAX)
                .nullable(),
            ecmaBacklogTarget: Yup.array().of(
                Yup.object().shape({
                    milestone: Yup.string(),
                    value: nullableInteger(9999)
                })
            ).nullable(),
                // .unique("Duplicated milestone", a => console.log(a)),
                // .unique("Duplicated milestone", a => {
                //     return a.milestone != null ? a.milestone.toUpperCase() : null
                // }),
            projectCollabUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            projectPWASiteUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            docRepositoryUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            defectsUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            requirementsUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
            cisUrl: Yup.string()
                .max(512, ValidationErrors.string.MAX)
                .nullable(),
        }),
        milestones: Yup.array().of(
            Yup.object().shape({
                label: Yup.string()
                    .max(45, ValidationErrors.string.MAX)
                    .required(ValidationErrors.REQUIRED),
                completion: Yup.number()
                    .min(0, ValidationErrors.number.MIN)
                    .max(100, ValidationErrors.number.MAX),
                meetingMinutes: Yup.string()
                    .max(512, ValidationErrors.string.MAX)
                    .nullable(),
            })
        )
            .unique("Duplicated label", a => a.label.toUpperCase())
    })
}