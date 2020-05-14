import {ProjectStates} from "../../util/constants";

export default {
    controls: {
        label: "Sync Button",
        allowedIf: {
            workspaceStatus: [ProjectStates.ENABLED]
        }
    },
    quality: {
        label: "Quality KPI",
        help: "Help for quality"
    },
    defects: {
        label: "New Open Defects",
        allowedIf: {
            maintenance: [false],
        },
        help: "Help for defects"
    },
    backlog: {
        label: "Backlog Reduction",
        help: "Help for backlog"
    },
    testExecution: {
        label: "Test execution (rate or number)",
        help: "Help for exec"
    },
    testRate: {
        label: "Test pass (rate or number)",
        help: "Help for pass"
    }
}