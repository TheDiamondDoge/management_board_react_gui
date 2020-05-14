import {ProjectStates} from "../../../util/constants";

export default {
    controls: {
        allowedIf: {
            workspaceStatus: [ProjectStates.ENABLED]
        }
    }
}