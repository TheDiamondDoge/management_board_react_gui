import {ProjectStates, ProjectTypes} from "../../../util/constants";

export default {
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
    oemPartner: {
        label: "OEM Partner",
        allowedIf: {
            projectType: [ProjectTypes.OEM_PRODUCT],
        }
    },
    disabledTime: {
        label: "Disabled Time",
        allowedIf: {
            workspaceState: [ProjectStates.DISABLED]
        },
    },
    executiveSummary: {label: "Executive Status Summary"},
    executiveActions: {label: "Executive Action Needed"},
    collabSite: {label: "Project Collaboration Site"},
    epmPwaSite: {
        label: "EPM project PWA Site:",
        notAllowedIf: {
            isEpm: [false],
        }
    },
    documentationRepo: {label: "Project Documentation Repository"},
    defectsReportSite: {
        label: "Defects Report Site",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER],
        }
    },
    activeRisks: {label: "Active Risks"},
    epmLastSavedDate: {
        label: "EPM Last Saved",
        notAllowedIf: {
            isEpm: [false],
        }
    },
    pwsLastUpdatedDate: {
        label: "PWS Last Updated",
        notAllowedIf: {
            isEpm: [false],
        }
    },
    pwsLastUpdatedBy: {label: "PWS Last Updated By"},
};