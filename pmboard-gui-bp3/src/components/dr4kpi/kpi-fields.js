import {contentAdherenceHelp, costAdherenceHelp, rqsChangeHelp, scheduleAdherenceHelp} from "../../util/global-helps";

let configObj = {
    year: {
        label: "Year (based on DR1 date)",
    },
    scheduleAdherence: {
        label: "Schedule Adherence",
        help: scheduleAdherenceHelp,
    },
    contentAdherence: {
        label: "Content Adherence",
        help: contentAdherenceHelp
    },
    rqsChange: {
        label: "Requirements Change",
        help: rqsChangeHelp,
    },
    costAdherence: {
        label: "Cost Adherence",
        help: costAdherenceHelp,
    }
};

Object.defineProperty(configObj, "year", {
    configurable: true, writable: true, enumerable: false
})

export default configObj;