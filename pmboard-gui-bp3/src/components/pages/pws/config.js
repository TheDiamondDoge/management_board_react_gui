import {ProjectTypes, PWSTabs} from "../../../util/constants";

let config = {
    [PWSTabs.SUMMARY]: {},
    [PWSTabs.INDICATORS]: {},
    [PWSTabs.INFORMATION]: {},
    [PWSTabs.ACTIONS]: {
        allowedIf: {
            projectDivision: ["NBD"]
        }
    },
    [PWSTabs.RISKS]: {},
    [PWSTabs.COST]: {},
    [PWSTabs.REPORT]: {},
    [PWSTabs.REQUIREMENTS]: {
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    [PWSTabs.BACKLOG]: {
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    [PWSTabs.DEFECTS]: {
        notAllowedIf: {
            projectType: [ProjectTypes.OFFER]
        }
    },
    [PWSTabs.BLC]: {
        notAllowedIf: {
            projectType: [ProjectTypes.RD_PRODUCT]
        }
    },
};

export default config;