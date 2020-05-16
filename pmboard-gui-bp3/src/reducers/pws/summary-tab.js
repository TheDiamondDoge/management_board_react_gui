import {SUMMARY_LOAD, SUMMARY_ERROR, SUMMARY_LOAD_SUCCESS, SUMMARY_RESET} from "../../actions/pws/summary-tab";

const initState = {
    payload: {},
    loading: true,
};

export default (state, action) => {
    if (state === undefined) {
        return initState;
    }

    switch (action.type) {
        case SUMMARY_LOAD:
            return {
                ...state,
                loading: true,
            };
        case SUMMARY_LOAD_SUCCESS:
            return {
                ...state,
                payload: dataComposer(action.summaryData.data),
                loading: false,
            };
        case SUMMARY_ERROR:
            return {
                ...state,
                loading: false,
            };
        case SUMMARY_RESET:
            return initState;
        default:
            return state;
    }
}

let dataComposer = (data) => ({
    general: {
        productName: data.productName,
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
        redFlag: data.redFlag,
        orangeFlag: data.orangeFlag,
        greenFlag: data.greenFlag,
        details: data.details,
    },
    links: {
        collabSite: data.collabSite,
        epmPwaSite: data.epmPwaSite,
        documentationRepo: data.documentationRepo,
        defectsReportSite: data.defectsReportSite,
        activeRisks: data.activeRisks,
        activeActions: data.activeActions,
    },
    pwsInfo: {
        epmLastSavedDate: data.epmLastSavedDate,
        pwsLastUpdatedDate: data.pwsLastUpdatedDate,
        pwsLastUpdatedBy: data.pwsLastUpdatedBy,
    },
    validationParams: {
        projectType: data.projectType,
        workspaceState: data.workspaceState,
        isEpm: data.epm,
    }
});


