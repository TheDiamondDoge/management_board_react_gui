import {WorkspaceStatus} from "../../../util/constants";
import {defectsBacklogChartHelp} from "../../../util/global-helps";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    },
    title: {
        help: defectsBacklogChartHelp
    }
}