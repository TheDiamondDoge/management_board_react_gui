import {LOAD_SUMMARY, LOAD_SUMMARY_FAIL, LOAD_SUMMARY_SUCCESS, RESET_STATE} from "../actions/summary-tab";

const initState = {
    loaded: false,
    summaryData: {},
    error: "",
};

export default (state, action) => {
    if (state === undefined) {
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
    general: {
        projectName: data.projectName,
        projectDescription: data.projectDescription,
        projectManager: data.projectManager,
        businessLineManager: data.businessLineManager,
        productLineManager: data.productLineManager,
        projectState: data.projectState,
        projectRigor: data.projectRigor,
        charter: data.charter,
        orBusinessPlan: data.orBusinessPlan,
        updatedBusinessPlan: data.updatedBusinessPlan,
        drChecklist: data.drChecklist,
        lessonsLearned: data.lessonsLearned,
        sponsor: data.sponsor,
        businessDivision: data.businessDivision,
        businessUnit: data.businessUnit,
        productLine: data.productLine,
        workspaceState: data.workspaceState,
        projectType: data.projectType,
        oemPartner: data.oemPartner,
        disabledTime: data.disabledTime,
        isEpm: data.epm
    },
    status: {
        executiveSummary: data.executiveSummary,
        executiveActions: data.executiveActions,
    },
    links: {
        collabSite: data.collabSite,
        epmPwaSite: data.epmPwaSite,
        documentationRepo: data.documentationRepo,
        defectsReportSite: data.defectsReportSite,
        activeRisks: data.activeRisks,
    },
    pwsInfo: {
        epmLastSavedDate: data.epmLastSavedDate,
        pwsLastUpdatedDate: data.pwsLastUpdatedDate,
        pwsLastUpdatedBy: data.pwsLastUpdatedBy,
    },
    milestones: data.milestones,
    healthIndicators: data.healthIndicators,
    validationParams: {
        projectType: data.projectType,
        workspaceState: data.workspaceState,
        isEpm: data.epm,
    }
});


