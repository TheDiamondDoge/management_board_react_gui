import {ProjectStates, ProjectTypes} from "../../util/constants";

export default {
    controls: {
        label: "Controls",
        allowedIf: {
            workspaceStatus: [ProjectStates.ENABLED]
        }
    },
    note: {
        label: "* For Offer Program, Requirement means 'Commercial deliverable'",
        allowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    dr1Actual: {
        label: "DR1 date (actual)",
    },
    committedAtDr1: {
        label: "# Requirements committed (baseline) at DR1",
    },
    addedAfterDr1: {
        label: "Current # of requirements added after DR1",
    },
    removedAfterDr1: {
        label: "Current # of baselined requirements removed after DR1",
    },
    modifiedAfterDr1: {
        label: "Current # of baselined requirements modified after DR1",
    },
    sum: {
        label: "Current # of scoped requirements",
    },
};