import {ProjectTypes} from "../../../util/constants";

//Props mandatory: label,
//Props not mandatory: type, notAllowedIf, allowedIf, editable
export const infoFieldsToRender = {
    projectDescription: {label: "Project Description", type: "textarea"},
    oemPartner: {
        label: "OEM Partner",
        allowedIf: {
            projectType: [ProjectTypes.OEM_PRODUCT]
        }
    },
    keyCustomers: {label: "Key Customers"},
    productRelease: {
        label: "Product Release",
        allowedIf: {
            epm: [false]
        }
    },
    projectType: {
        label: "Project Type",
        allowedIf: {
            epm: [false]
        }
    },
    projectRigor: {
        label: "Project Rigor",
        allowedIf: {
            epm: [false]
        }
    },
    projectState: {
        label: "Project State",
        allowedIf: {
            epm: [false]
        }
    },
    businessDivision: {label: "Business Division"},
    businessUnit: {label: "Business Unit"},
    productLine: {label: "Product Line"},
    productName: {label: "Product Name"},
    sponsor: {label: "Sponsor"},
    businessLineManager: {label: "Business Line Manager"},
    productLineManager: {label: "Product Line Manager"},
    projectManager: {
        label: "Project Manager",
        allowedIf: {
            epm: [false]
        }
    },
    charter: {label: "Charter"},
    orBusinessPlan: {label: "OR Business Plan"},
    updatedBusinessPlan: {label: "Updated Business Plan"},
    drChecklist: {label: "Tailored DR-checklist"},
    lessonsLearned: {label: "Lessons learned"},
    projectPlan: {label: "Project Plan"},
    launchingPlan: {
        label: "Launching Plan",
        allowedIf: {
            projectType: [ProjectTypes.OFFER, ProjectTypes.OFFER_PRODUCT]
        }
    },
    metricsScope: {
        label: "Metrics Scope",
        allowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    rqRelease: {
        label: "RQ Release Name (JIRA)",
        allowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    ecmaBacklogTarget: {
        label: "ECMA Backlog Target",
        allowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    maintenance: {
        label: "Maintenance Project",
        type: "checkbox"
    },
    composite: {
        label: "Composite Project",
        type: "checkbox"
    },
    contributingProjects: {
        label: "Contributing Projects",
    },
    projectCollabUrl: {label: "Project Collaboration Site"},
    salesForce: {
        label: "Sales Force",
        allowedIf: {
            projectType: [ProjectTypes.OFFER, ProjectTypes.OFFER_PRODUCT]
        }
    },
    projectPWASiteUrl: {
        label: "Project PWA Site",
        allowedIf: {
            epm: [false]
        }
    },
    docRepositoryUrl: {label: "Project Documentation Repository"},
    defectsUrl: {
        label: "Defects (JIRA)",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    requirementsUrl: {
        label: "Requirements (JIRA)",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    cisUrl: {
        label: "Continuous Integration Site",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
};