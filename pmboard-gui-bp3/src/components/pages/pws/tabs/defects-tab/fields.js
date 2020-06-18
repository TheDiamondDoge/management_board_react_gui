import {WorkspaceStatus} from "../../../../../util/constants";
import {newOpenDefectsChartHelp} from "../../../../../util/global-helps";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [WorkspaceStatus.ENABLED]
        }
    },
    title: {
        help: newOpenDefectsChartHelp
    }
}