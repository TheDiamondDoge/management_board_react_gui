import {ProjectStates, ProjectTypes} from "../../../util/constants";

export default {
    controls: {
        notAllowedIf: {
            workspaceStatus: [ProjectStates.ENABLED]
        }
    },
    quality: {
        label: "Quality",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    }
}