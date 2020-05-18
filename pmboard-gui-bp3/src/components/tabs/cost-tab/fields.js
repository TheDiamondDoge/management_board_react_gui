import {WorkspaceStatus} from "../../../util/constants";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    }
};