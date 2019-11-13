import {ProjectTypes} from "../../../util/constants";

export const summaryFieldsToRender = {
    projectDescription: {label: "Project Description"},
    oemPartner: {
        label: "OEM Partner",
        notAllowedIn: {
            projectType: [ProjectTypes.PRODUCT, ProjectTypes.OFFER, ProjectTypes.OFFER_PRODUCT, ProjectTypes.SUPPORT_PROGRAM],
        }
    },
    keyCustomers: {label: "Key Customers"},
    productRelease: {label: "Product Release"},
    projectType: {label: "Project Type"},
    projectRigor: {label: "Project Rigor"},
    projectState: {label: "Project State"},
    businessDivision: {label: "Business Division"},
    businessUnit: {label: "Business Unit"},
    productLine: {label: "Product Line"},
    productName: {label: "Product Name"},
    sponsor: {label: "Sponsor"},
    businessLineManager: {label: "Business Line Manager"},
    productLineManager: {label: "Product Line Manager"},
    projectManager: {label: "Project Manager"},
    charter: {label: "Charter"},
    orBusinessPlan: {label: "OR Business Plan"},
    updatedBusinessPlan: {label: "Updated Business Plan"},
    drChecklist: {label: "Tailored DR-checklist"},
    lessonsLearned: {label: "Lessons learned"},
    projectPlan: {label: "Project Plan"},
    metricsScope: {label: "Metrics Scope"},
    rqRelease: {label: "RQ Release Name (JIRA)"},
    ecmaBacklogTarget: {label: "ECMA Backlog Target"},
    composite: {
        label: "Composite Project",
        notAllowedIn: {
            projectType: [ProjectTypes.PRODUCT]
        }
    },
    projectCollabUrl: {label: "Project Collaboration Site"},
    projectPWASiteUrl: {label: "Project PWA Site"},
    docRepositoryUrl: {label: "Project Documentation Repository"},
    defectsUrl: {label: "Defects (JIRA)"},
    requirementsUrl: {label: "Requirements (JIRA)"},
    cisUrl: {label: "Continuous Integration Site"},
};