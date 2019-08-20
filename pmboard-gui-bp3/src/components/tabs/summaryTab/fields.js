const fieldsParam = {
    projectName: {label: "Project Name"},
    projectDescription: {label: "Project Description"},
    projectManager: {label: "Project Manager"},
    businessLineManager: {label: "Business Line Manager"},
    productLineManager: {label: "Product Line Manager"},
    projectState: {label: "Project State"},
    projectRigor: {label: "Project Rigor"},
    charter: {label: "Charter"},
    orBusinessPlan: {label: "OR Business Plan"},
    updatedBusinessPlan: {label: "Updated Business Plan"},
    drChecklist: {label: "Tailored DR-checklist"},
    lessonsLearned: {label: "Lessons learned"},
    sponsor: {label: "Sponsor"},
    businessDivision: {label: "Business Division"},
    businessUnit: {label: "Business Unit"},
    productLine: {label: "Product Line"},
    workspaceState: {label: "PWS State"},
    projectType: {label: "Project Type"},
    oemPartner: {label: "OEM Partner"},
    disabledTime: {label: "Disabled Time"},
    executiveSummary: {label: "Executive Status Summary"},
    executiveActions: {label: "Executive Action Needed"},
    collabSite: {label: "Project Collaboration Site"},
    epmPwaSite: {label: "EPM project PWA Site:"},
    documentationRepo: {label: "Project Documentation Repository"},
    defectsReportSite: {label: "Defect Report Site"},
    activeRisks: {label: "Active Risks"},
    epmLastSavedDate: {label: "EPM Last Saved"},
    pwsLastUpdatedDate: {label: "PWS Last Updated"},
    pwsLastUpdatedBy: {label: "PWS Last Updated By"},
};

export default function getLabelById(id) {
    if (id in fieldsParam) {
        return fieldsParam[id].label;
    } else {
        return false;
    }
}