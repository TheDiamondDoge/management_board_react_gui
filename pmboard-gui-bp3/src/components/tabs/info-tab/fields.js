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
        },
        editable: false,
    },
    projectType: {
        label: "Project Type",
        allowedIf: {
            epm: [false]
        },
        editable: false,
    },
    projectRigor: {
        label: "Project Rigor",
        allowedIf: {
            epm: [false]
        },
        editable: false,
    },
    projectState: {
        label: "Project State",
        allowedIf: {
            epm: [false]
        },
        editable: false,
    },
    businessDivision: {
        label: "Business Division",
        editable: false,
    },
    businessUnit: {
        label: "Business Unit",
        editable: false,
    },
    productLine: {
        label: "Product Line",
        editable: false,
    },
    productName: {
        label: "Product Name",
        editable: false,
    },
    sponsor: {
        label: "Sponsor",
        editable: false,
    },
    businessLineManager: {
        label: "Business Line Manager",
        editable: false,
    },
    productLineManager: {
        label: "Product Line Manager",
        editable: false,
    },
    projectManager: {
        label: "Project Manager",
        allowedIf: {
            epm: [false]
        },
        editable: false,
    },
    charter: {label: "Charter"},
    orBusinessPlan: {
        label: "OR Business Plan",
        editable: false,
    },
    updatedBusinessPlan: {label: "Updated Business Plan"},
    drChecklist: {label: "Tailoring"},
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
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    rqRelease: {
        label: "RQ Release Name (JIRA)",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    ecmaBacklogTarget: {
        label: "ECMA Backlog Target",
        // allowedIf: {
        //     projectType: [ProjectTypes.OFFER]
        // }
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
            epm: [true]
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