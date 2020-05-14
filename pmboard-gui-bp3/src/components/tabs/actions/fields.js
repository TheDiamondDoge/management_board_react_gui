import {ProjectStates} from "../../../util/constants";

export default {
    controls: {
        notAllowedIf: {
            workspaceStatus: [ProjectStates.DISABLED],
        }
    }
}