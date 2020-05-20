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
            charter: Yup.string()
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