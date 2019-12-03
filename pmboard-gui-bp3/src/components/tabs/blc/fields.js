import {ProjectTypes} from "../../../util/constants";

//TODO: think how to use it because blc do not get 'offer' from server (pws data???)
export default () => ({
    pm: {
        label: "Program Manager"
    },
    pmo: {
        label: "PMO - Quality"
    },
    sales: {
        label: "Sales",
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    }
})