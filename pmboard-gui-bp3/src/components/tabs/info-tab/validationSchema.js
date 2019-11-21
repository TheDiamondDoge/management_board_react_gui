import * as Yup from "yup";
import {ValidationErrors} from "../../../util/constants";

export default Yup.object().shape({
    general: Yup.object().shape({
        oemPartner: Yup.string()
            .max(256, ValidationErrors.string.MAX),
        keyCustomers: Yup.string()
            .max(256, ValidationErrors.string.MAX),
        productRelease: Yup.string()
            .max(45, ValidationErrors.string.MAX),
        projectType: Yup.string()
            .max(10, ValidationErrors.string.MAX),
        projectRigor: Yup.string()
            .max(10, ValidationErrors.string.MAX),
        projectState: Yup.string()
            .max(10, ValidationErrors.string.MAX),
        businessDivision: Yup.string()
            .max(10, ValidationErrors.string.MAX),
        businessUnit: Yup.string()
            .max(10, ValidationErrors.string.MAX),
        productLine: Yup.string()
            .max(45, ValidationErrors.string.MAX),
        productName: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        sponsor: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        businessLineManager: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        productLineManager: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        projectManager: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        charter: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        orBusinessPlan: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        updatedBusinessPlan: Yup.object().shape({
                value: Yup.string().max(512, ValidationErrors.string.MAX),
                comment: Yup.string().max(255, ValidationErrors.string.MAX)
        }),
        drChecklist: Yup.object().shape({
            value: Yup.string().max(512, ValidationErrors.string.MAX),
            comment: Yup.string().max(255, ValidationErrors.string.MAX)
        }),
        lessonsLearned: Yup.object().shape({
            value: Yup.string().max(512, ValidationErrors.string.MAX),
            comment: Yup.string().max(255, ValidationErrors.string.MAX)
        }),
        projectPlan: Yup.object().shape({
            value: Yup.string().max(512, ValidationErrors.string.MAX),
            comment: Yup.string().max(255, ValidationErrors.string.MAX)
        }),
        launchingPlan: Yup.object().shape({
            value: Yup.string().max(512, ValidationErrors.string.MAX),
            comment: Yup.string().max(255, ValidationErrors.string.MAX)
        }),
        metricsScope: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        rqRelease: Yup.string()
            .max(100, ValidationErrors.string.MAX),
        ecmaBacklogTarget: Yup.array().of(
            Yup.object().shape({
                value: Yup.number()
                    .max(99999, ValidationErrors.number.MAX)
                    .typeError(ValidationErrors.typeError.number)
            })
        ),
        projectCollabUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        projectPWASiteUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        docRepositoryUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        defectsUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        requirementsUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
        cisUrl: Yup.string()
            .max(512, ValidationErrors.string.MAX),
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
        })
    )
})
