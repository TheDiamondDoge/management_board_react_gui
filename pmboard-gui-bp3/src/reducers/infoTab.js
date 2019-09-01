import {LOAD_INFO, LOAD_INFO_FAIL, LOAD_INFO_SUCCESS, RESET_STATE} from '../actions/infoTab';

const initState = {
    loaded: false,
    data: {},
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
                loaded: true,
                data: dataComposer(action.data),
            };
        case LOAD_INFO_FAIL:
            return {
                ...state,
                loaded: false,
                error: action.error
            };
        case RESET_STATE:
        default:
            return initState;
    }
}

let dataComposer = (data) => ({
    general: [
        {id: 'projectDescription', value: data.projectDescription},
        {id: 'oemPartner', value: data.oemPartner},
        {id: 'productRelease', value: data.productRelease},
        {id: 'projectType', value: data.projectType},
        {id: 'projectRigor', value: data.projectRigor},
        {id: 'projectState', value: data.projectState},
        {id: 'businessDivision', value: data.businessDivision},
        {id: 'businessUnit', value: data.businessUnit},
        {id: 'productLine', value: data.productLine},
        {id: 'productName', value: data.productName},
        {id: 'sponsor', value: data.sponsor},
        {id: 'businessLineManager', value: data.businessLineManager},
        {id: 'productLineManager', value: data.productLineManager},
        {id: 'projectManager', value: data.projectManager},
        {id: 'charter', value: data.charter},
        {id: 'orBusinessPlan', value: data.orBusinessPlan},
        {id: 'updatedBusinessPlan', value: data.updatedBusinessPlan},
        {id: 'drChecklist', value: data.drChecklist},
        {id: 'lessonsLearned', value: data.lessonsLearned},
        {id: 'metricsScope', value: data.metricsScope},
        {id: 'rqRelease', value: data.rqRelease},
        {id: 'ecmaBacklogTarget', value: data.ecmaBacklogTarget},
        {id: 'composite', value: data.composite},
    ],
    milestones: data.milestones,
    urls: [
        {id: 'projectCollabUrl', value: data.projectCollabUrl},
        {id: 'projectPWASiteUrl', value: data.projectPWASiteUrl},
        {id: 'docRepositoryUrl', value: data.projectPWASiteUrl},
        {id: 'defectsUrl', value: data.defectsUrl},
        {id: 'requirementsUrl', value: data.requirementsUrl},
        {id: 'cisUrl', value: data.cisUrl},
    ],
    validationParams: {
        projectType: data.projectType,
    }
});