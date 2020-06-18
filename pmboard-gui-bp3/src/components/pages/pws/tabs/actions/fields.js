import {WorkspaceStatus} from "../../../../../util/constants";

export default {
    controls: {
        notAllowedIf: {
            workspaceStatus: [WorkspaceStatus.DISABLED],
        }
    }
}