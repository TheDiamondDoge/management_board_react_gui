const PRODUCT = "Product";
const OFFER = "Offer";
const OFFER_PRODUCT = "Offer & Product";
const OEM_PRODUCT = "OEM Product";
const SUPPORT_PROGRAM = "Support Program";
const ENABLED = "ENABLED";

const fieldsParam = {
    projectDescription: {label: "Project Description"},
    oemPartner: {
        label: "OEM Partner",
        notAllowedIn: {
            projectType: [PRODUCT, OFFER, OFFER_PRODUCT, SUPPORT_PROGRAM],
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
    composite: {label: "Composite Project"},
    projectCollabUrl: {label: "Project Collaboration Site"},
    projectPWASiteUrl: {label: "Project PWA Site"},
    docRepositoryUrl: {label: "Project Documentation Repository"},
    defectsUrl: {label: "Defects (JIRA)"},
    requirementsUrl: {label: "Requirements (JIRA)"},
    cisUrl: {label: "Continuous Integration Site"},
};

export const getLabelById = (id) => {
    if (isLabelExists(id)) {
        return fieldsParam[id].label;
    }
};

const isLabelExists = (id) => {
    return (id in fieldsParam);
};

//TODO: Need to add 'notAllowedExcept' situation
export const displayOrNot = (id, options) => {
    if (!isLabelExists(id)) return false;

    if (fieldsParam[id].hasOwnProperty("notAllowedIn")) {
        let fieldProps = fieldsParam[id].notAllowedIn;
        for (let prop in fieldProps) {
            if (options[prop] !== undefined) {
                for (let i = 0; i < fieldProps[prop].length; i++) {
                    console.log(fieldProps[prop][i]);
                    if (fieldProps[prop][i] == options[prop]) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};