import {WorkspaceStatus} from "../../util/constants";
import {
    backlogReductionHelp,
    newOpenDefectsHelp,
    qualityKpiHelp,
    testExecutionHelp,
    testPassHelp
} from "../../util/global-helps";

let config = {
    controls: {
        label: "Sync Button",
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    },
    quality: {
        label: "Quality KPI",
        help: qualityKpiHelp
    },
    defects: {
        label: "New Open Defects",
        allowedIf: {
            maintenance: [false],
        },
        help: newOpenDefectsHelp
    },
    backlog: {
        label: "Backlog Reduction",
        help: backlogReductionHelp
    },
    testExecution: {
        label: "Test execution (rate or number)",
        help: testExecutionHelp
    },
    testRate: {
        label: "Test pass (rate or number)",
        help: testPassHelp
    }
};

Object.defineProperty(config, "controls", {
    enumerable: false, configurable: true, writable: true
});

export default config;