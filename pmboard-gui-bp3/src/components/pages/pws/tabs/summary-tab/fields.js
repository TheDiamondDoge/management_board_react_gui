import {WorkspaceStatus, ProjectTypes} from "../../../../../util/constants";

export default {
    productName: {label: "Product Name"},
    projectDescription: {label: "Project Description"},
    projectManager: {label: "Project Manager"},
    businessLineManager: {label: "Business Line Manager"},
    productLineManager: {label: "Product Line Manager"},
    projectState: {label: "Project State"},
    projectRigor: {label: "Project Rigor"},
    charter: {label: "Charter"},
    orBusinessPlan: {label: "OR Business Plan"},
    updatedBusinessPlan: {label: "Updated Business Plan"},
    drChecklist: {label: "Tailoring"},
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
            workspaceState: [WorkspaceStatus.DISABLED]
        },
    },
    executiveSummary: {label: "Executive Status Summary"},
    redFlag: {label: "Red Flag"},
    orangeFlag: {label: "Orange Flag"},
    greenFlag: {label: "Green Flag"},
    details: {label: "Current Project Details"},
    collabSite: {label: "Project Collaboration Site"},
    epmPwaSite: {
        label: "EPM project PWA Site:",
        allowedIf: {
            isEpm: [true],
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
    activeActions: {label: "Active Actions"},
    epmLastSavedDate: {
        label: "EPM Last Saved",
        allowedIf: {
            isEpm: [true],
        }
    },
    pwsLastUpdatedDate: {label: "PWS Last Updated"},
    pwsLastUpdatedBy: {label: "PWS Last Updated By"},
};