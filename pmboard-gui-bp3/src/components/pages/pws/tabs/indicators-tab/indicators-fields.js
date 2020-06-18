import {WorkspaceStatus, ProjectTypes} from "../../../../../util/constants";

export default {
    controls: {
        notAllowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    },
    quality: {
        label: "Quality",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    }
}