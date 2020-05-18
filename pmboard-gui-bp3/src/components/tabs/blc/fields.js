import {WorkspaceStatus, ProjectTypes} from "../../../util/constants";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
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