import {INFO_LOAD, INFO_ERROR, INFO_LOAD_SUCCESS, INFO_RESET, INFO_SAVE_DATA} from '../../actions/pws/info-tab';
import milestones from "./milestones";

const initState = {
    loading: true,
    payload: {}
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case INFO_LOAD:
            return {
                ...state,
                loading: true,
            };
        case INFO_LOAD_SUCCESS:
            return {
                ...state,
                payload: dataComposer(action.data),
                loading: false,
            };
        case INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case INFO_SAVE_DATA:
            action.data = getSaveDto(action.data);
            return {
                ...state
            };
        case INFO_RESET:
            return initState;
        default:
            return state;
    }
}

let getSaveDto = (data) => ({
    ...data.general,
    ...data.urls,
    milestones: [...data.milestones]
});

let dataComposer = (data) => ({
    general: {
        projectDescription: data.projectDescription,
        oemPartner: data.oemPartner,
        keyCustomers: data.keyCustomers,
        productRelease: data.productRelease,
        projectType: data.projectType,
        projectRigor: data.projectRigor,
        projectState: data.projectState,
        businessDivision: data.businessDivision,
        businessUnit: data.businessUnit,
        productLine: data.productLine,
        productName: data.productName,
        sponsor: data.sponsor,
        businessLineManager: data.businessLineManager,
        productLineManager: data.productLineManager,
        projectManager: data.projectManager,
        charter: data.charter,
        orBusinessPlan: data.orBusinessPlan,
        updatedBusinessPlan: data.updatedBusinessPlan,
        drChecklist: data.drChecklist,
        lessonsLearned: data.lessonsLearned,
        projectPlan: data.projectPlan,
        launchingPlan: data.launchingPlan,
        metricsScope: data.metricsScope,
        rqRelease: data.rqRelease,
        ecmaBacklogTarget: [...getEcmaObject(data.ecmaBacklogTarget)],
        maintenance: data.maintenance,
        composite: data.composite,
        contributingProjects: data.contributingProjects
    },
    urls: {
        projectCollabUrl: data.projectCollabUrl,
        salesForce: data.salesForce,
        projectPWASiteUrl: data.projectPWASiteUrl,
        docRepositoryUrl: data.docRepositoryUrl,
        defectsUrl: data.defectsUrl,
        requirementsUrl: data.requirementsUrl,
        cisUrl: data.cisUrl,
    },
});

let getEcmaObject = (obj) => {
    if (obj === null) {
        return [
            {milestones: "", value: ""},
            {milestones: "", value: ""},
        ]
    } else if (obj.length === 1) {
        return [
            ...obj,
            {milestones: "", value: ""},
        ]
    } else {
        return obj;
    }
};