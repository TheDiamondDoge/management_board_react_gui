import {
    EDIT_GENERAL_DATA,
    EDIT_MILESTONE_DATA,
    LOAD_INFO,
    LOAD_INFO_FAIL,
    LOAD_INFO_SUCCESS,
    RESET_STATE
} from '../actions/info-tab';

const initState = {
    loaded: false,
    general: {},
    milestones: [],
    urls: {},
    error: "",
};
export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_INFO:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_INFO_SUCCESS:
            return {
                ...state,
                ...dataComposer(action.data),
                loaded: true,
            };
        case LOAD_INFO_FAIL:
            return {
                ...state,
                loaded: false,
                error: action.error
            };
        case EDIT_GENERAL_DATA:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    ...action.data,
                }
            };
        case EDIT_MILESTONE_DATA:
            return {
                ...state,
                milestones: editMilestones(state.milestones, action)
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}

let editMilestones = (prevMilestones, action) => {
    let milestonesCopy = [...prevMilestones];
    milestonesCopy[action.id] = {
        ...milestonesCopy[action.id],
        ...action.data,
    };

    return milestonesCopy;
};

let dataComposer = (data) => ({
    general: {
        projectDescription: data.projectDescription,
        oemPartner: data.oemPartner,
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
        metricsScope: data.metricsScope,
        rqRelease: data.rqRelease,
        ecmaBacklogTarget: data.ecmaBacklogTarget,
        composite: data.composite,
    },
    milestones: data.milestones,
    urls: {
        projectCollabUrl: data.projectCollabUrl,
        projectPWASiteUrl: data.projectPWASiteUrl,
        docRepositoryUrl: data.projectPWASiteUrl,
        defectsUrl: data.defectsUrl,
        requirementsUrl: data.requirementsUrl,
        cisUrl: data.cisUrl,
    },
    validationParams: {
        projectType: data.projectType,
    }
});