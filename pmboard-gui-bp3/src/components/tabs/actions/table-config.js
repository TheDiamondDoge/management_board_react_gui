import {dateDecorator, arrayDecorator, preDecorator} from "../../../util/common-decorators/common-decorators";

export default [
    {
        id: "registry",
        headerName: "Registry Type",
        editable: true,
        style: {
            header: {
                width: 80
            }
        },
        searchType: "multiselect",
        inputType: "select",
        selectValues: [
            {value: "", label: ""},
            {value: "ACTION", label: "Action"},
            {value: "INFORMATIONAL", label: "Informational"},
            {value: "DECISION", label: "Decision"},
        ]
    },
    {
        id: "uid",
        headerName: "Unique ID",
        style: {
            header: {
                width: 80
            }
        },
        searchType: "multiselect"
    },
    {
        id: "title",
        headerName: "Title",
        editable: true,
        inputType: "text",
        style: {
            header: {
                width: 150
            }
        },
        searchType: "multiselect",
    },
    {
        id: "state",
        headerName: "State",
        editable: true,
        style: {
            header: {
                width: 80
            }
        },
        searchType: "multiselect",
        inputType: "select",
        selectValues: [
            {value: "", label: ""},
            {value: "ACTIVE", label: "Active"},
            {value: "POSTPONED", label: "Postponed"},
            {value: "CLOSED", label: "Closed"},
            {value: "NOT_OCCUR", label: "Did not occur"},
        ],
    },
    {
        id: "priority",
        headerName: "Priority",
        editable: true,
        style: {
            header: {
                width: 80
            }
        },
        searchType: "multiselect",
        inputType: "select",
        selectValues: [
            {value: "", label: ""},
            {value: "HIGH", label: "High"},
            {value: "MEDIUM", label: "Medium"},
            {value: "LOW", label: "Low"},
        ]
    },
    {
        id: "owner",
        headerName: "Owner",
        editable: true,
        style: {
            header: {
                width: 150
            }
        },
        searchType: "multiselect",
        inputType: "text"
    },
    {
        id: "optionalInfo",
        headerName: "Optional Information",
        editable: true,
        style: {
            header: {
                width: 260
            }
        },
        inputType: "textarea",
        searchType: "input",
        decorator: preDecorator
    },
    {
        id: "dueDate",
        headerName: "Due Date",
        editable: true,
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect",
        inputType: "date",
        decorator: dateDecorator
    },
    {
        id: "description",
        headerName: "Detailed Description",
        editable: true,
        style: {
            header: {
                width: 250
            }
        },
        inputType: "textarea",
        searchType: "input",
        decorator: preDecorator
    },
    {
        id: "status",
        headerName: "Status updates and Resolution Description",
        editable: true,
        style: {
            header: {
                width: 250
            }
        },
        inputType: "textarea",
        searchType: "input",
        decorator: preDecorator
    },
    {
        id: "createdDate",
        headerName: "Created Date",
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "closedDate",
        headerName: "Closed Date",
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "relatedRisks",
        headerName: "Related Risks",
        editable: true,
        style: {
            header: {
                width: 80
            }
        },
        searchType: "input",
        inputType: "multiselect",
        decorator: arrayDecorator
    },
];