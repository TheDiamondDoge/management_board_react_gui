import {WorkspaceStatus, ProjectTypes} from "../../../../../util/constants";
import {blcDashboardHelp} from "../../../../../util/global-helps";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    },
    title: {
        help: blcDashboardHelp,
    },
    pm: {
        label: "Program Manager"
    },
    pmo: {
        label: "PMO - Quality"
    },
    sales: {
        label: "Sales",
        allowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    }
}