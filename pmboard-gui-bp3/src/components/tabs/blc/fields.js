import {ProjectStates, ProjectTypes} from "../../../util/constants";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [ProjectStates.ENABLED]
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