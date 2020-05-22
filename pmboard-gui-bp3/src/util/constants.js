export const ProjectTypes = {
    PRODUCT: "Product",
    OFFER : "Offer",
    OFFER_PRODUCT : "Offer & Product",
    OEM_PRODUCT : "OEM Product",
    SUPPORT_PROGRAM : "Support Program",
    RD_PRODUCT: "R&D Product"
};

export const ProjectStates = {
    CLOSED: "CLOSED",
    COMMITTED: "COMMITTED",
    CANCELLED: "CANCELLED",
    FORECAST: "FORECAST",
    PLANNING: "PLANNING"
};

export const PWSTabs = {
    SUMMARY: "summary",
    INDICATORS: "indicators",
    INFORMATION: "information",
    ACTIONS: "actions",
    RISKS: "risks",
    COST: "cost",
    REPORT: "report",
    REQUIREMENTS: "requirements",
    BACKLOG: "backlog",
    DEFECTS: "defects",
    BLC: "blc"
};

export const WorkspaceStatus = {
    ENABLED: "ENABLED",
    DISABLED: "DISABLED"
};

export const ValidationErrors = {
    string: {
        MAX: "String is too long",
        MIN: "String is too short",
    },
    number: {
        MAX: "Number is too big",
        MIN: "Number is too small"
    },
    typeError: {
        number: "Must be a number",
        integer: "Must be an integer"
    },
    REQUIRED: "Value required"
};

export const ReportTypes = {
    SUMMARY: "summary",
    RED_FLAG: "red",
    ORANGE_FLAG: "orange",
    GREEN_FLAG: "green",
    DETAILS: "details",
};

export const CommonMilestonesLabels = {
    OR: "OR",
    DR0: "DR0",
    DR1: "DR1",
    DR2: "DR2",
    DR3: "DR3",
    TR: "TR",
    DR4: "DR4",
    DR5: "DR5",
    OBR: "OBR",
    CI: "CI"
};

export const BlcRowNames = {
    PM: "pm",
    PMO: "pmo",
    SALES: "sales"
};

export const Messages = {
    FORM_SUBMIT_ERROR: "You have errors in your form. Please fix them before save."
};