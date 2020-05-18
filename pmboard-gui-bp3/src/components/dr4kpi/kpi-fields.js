let configObj = {
    year: {
        label: "Year (based on DR1 date)",
    },
    scheduleAdherence: {
        label: "Schedule Adherence",
        help: "Test help for schedule adherence",
    },
    contentAdherence: {
        label: "Content Adherence",
        help: "Test help for content adherence",
    },
    rqsChange: {
        label: "Requirements Change",
        help: "Test help for rqs change",
    },
    costAdherence: {
        label: "Cost Adherence",
        help: "Test help for cost adherence",
    }
};

Object.defineProperty(configObj, "year", {
    configurable: true, writable: true, enumerable: false
})

export default configObj;