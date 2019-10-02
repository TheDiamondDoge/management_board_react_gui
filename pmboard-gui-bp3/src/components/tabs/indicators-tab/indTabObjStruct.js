const dataObj = {
    milestones: [],
    healthStatus: {
        overall: {
            prev: {date: "", status: ""},
            curr: {date: "", status: ""}
        },
        schedule: {
            prev: {date: "", status: ""},
            curr: {date: "", status: ""}
        },
        scope: {
            prev: {date: "", status: ""},
            curr: {date: "", status: ""}
        },
        quality: {
            prev: {date: "", status: ""},
            curr: {date: "", status: ""}
        },
        cost: {
            prev: {date: "", status: ""},
            curr: {date: "", status: ""}
        },
    },
    requirements: {
        dr1Date: "",
        rqsCommitted: "",
        rqsAdded: "",
        rqsRemoved: "",
        rqsModified: "",
        rqsScoped: "",
    },
    dr4kpi: {
        schedule: "",
        content: "",
        rqs: "",
        cost: "",
    },
    quality: {
        syncDate: "",
        quality: {objective: "", actual: "", comment: ""},
        defects: {objective: "", actual: "", comment: ""},
        backlog: {objective: "", actual: "", comment: ""},
        testExec: [
            {id: "", objective: "", actual: "", comment: "", deleted: 0},
            {id: "", objective: "", actual: "", comment: "", deleted: 0}
        ],
        textPass: [
            {id: "", objective: "", actual: "", comment: "", deleted: 0},
            {id: "", objective: "", actual: "", comment: "", deleted: 0}
        ]
    }
};