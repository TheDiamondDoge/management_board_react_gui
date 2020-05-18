import {WorkspaceStatus, ProjectTypes} from "../../util/constants";

let config = {
    controls: {
        label: "Controls",
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
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

Object.defineProperty(config, "controls", {
    enumerable: false, writable: true, configurable: true
});

export default config;