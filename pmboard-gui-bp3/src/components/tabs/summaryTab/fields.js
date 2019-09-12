const PRODUCT = "Product";
const OFFER = "Offer";
const OFFER_PRODUCT = "Offer & Product";
const OEM_PRODUCT = "OEM Product";
const SUPPORT_PROGRAM = "Support Program";
const ENABLED = "ENABLED";

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
    oemPartner: {
        label: "OEM Partner",
        notAllowedIn: {
            projectType: [PRODUCT, OFFER, OFFER_PRODUCT, SUPPORT_PROGRAM],
        }
    },
    disabledTime: {
        label: "Disabled Time",
        notAllowedIn: {
            workspaceState: [ENABLED],
        }
    },
    executiveSummary: {label: "Executive Status Summary"},
    executiveActions: {label: "Executive Action Needed"},
    collabSite: {label: "Project Collaboration Site"},
    epmPwaSite: {
        label: "EPM project PWA Site:",
        notAllowedIn: {
            isEpm: [false],
        }
    },
    documentationRepo: {label: "Project Documentation Repository"},
    defectsReportSite: {
        label: "Defect Report Site",
        notAllowedIn: {
            projectType: [OFFER],
        }
    },
    activeRisks: {label: "Active Risks"},
    epmLastSavedDate: {
        label: "EPM Last Saved",
        notAllowedIn: {
            isEpm: [false],
        }
    },
    pwsLastUpdatedDate: {
        label: "PWS Last Updated",
        notAllowedIn: {
            isEpm: [false],
        }
    },
    pwsLastUpdatedBy: {label: "PWS Last Updated By"},
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
        for (let prop in Object.keys(fieldProps)) {
            if (options[prop] !== undefined) {
                for (let i = 0; i < fieldProps[prop].length; i++) {
                    if (fieldProps[prop][i] === options[prop]) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};