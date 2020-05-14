import {ProjectTypes} from "../../../util/constants";

export default {
    quality: {
        label: "Quality",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    }
}