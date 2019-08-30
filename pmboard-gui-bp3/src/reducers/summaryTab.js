import {LOAD_SUMMARY, LOAD_SUMMARY_FAIL, LOAD_SUMMARY_SUCCESS, RESET_STATE} from "../actions/summaryTab";

const initState = {
    loaded: false,
    summaryData: {},
    error: "",
};

export default (state, action) => {
    if (state === undefined){
        return initState;
    }

    switch (action.type) {
        case LOAD_SUMMARY:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_SUMMARY_SUCCESS:
            return {
                ...state,
                summaryData: dataComposer(action.summaryData),
                loaded: true,
            };
        case LOAD_SUMMARY_FAIL:
            return {
                ...state,
                error: action.error,
                loaded: false,
            };
        case RESET_STATE:
            return initState;
        default:
            return state;
    }
}

let dataComposer = (data) => ({
    general: [
        {id: "projectName", name: data.projectName},
        {id: "projectDescription", name: data.projectDescription},
        {id: "projectManager", name: data.projectManager},
        {id: "businessLineManager", name: data.businessLineManager},
        {id: "productLineManager", name: data.productLineManager},
        {id: "projectState", name: data.projectState},
        {id: "projectRigor", name: data.projectRigor},
        {id: "charter", name: data.charter},
        {id: "orBusinessPlan", name: data.orBusinessPlan},
        {id: "updatedBusinessPlan", name: data.updatedBusinessPlan},
        {id: "drChecklist", name: data.drChecklist},
        {id: "lessonsLearned", name: data.lessonsLearned},
        {id: "sponsor", name: data.sponsor},
        {id: "businessDivision", name: data.businessDivision},
        {id: "businessUnit", name: data.businessUnit},
        {id: "productLine", name: data.productLine},
        {id: "workspaceState", name: data.workspaceState},
        {id: "projectType", name: data.projectType},
        {id: "oemPartner", name: data.oemPartner},
        {id: "disabledTime", name: data.disabledTime},
        {id: "isEpm", name: data.epm},
    ],
    status: [
        {id: "executiveSummary", name: data.executiveSummary},
        {id: "executiveActions", name: data.executiveActions},
    ],
    links: [
        {id: "collabSite", name: data.collabSite},
        {id: "epmPwaSite", name: data.epmPwaSite},
        {id: "documentationRepo", name: data.documentationRepo},
        {id: "defectsReportSite", name: data.defectsReportSite},
        {id: "activeRisks", name: data.activeRisks}
    ],
    pwsInfo: [
        {id: "epmLastSavedDate", name: data.epmLastSavedDate},
        {id: "pwsLastUpdatedDate", name: data.pwsLastUpdatedDate},
        {id: "pwsLastUpdatedBy", name: data.pwsLastUpdatedBy}
    ],
    milestones: data.milestones,
    healthIndicators: data.healthIndicators,
    validationParams: {
        projectType: data.projectType,
        workspaceState: data.workspaceState,
        isEpm: data.epm,
    }
});


