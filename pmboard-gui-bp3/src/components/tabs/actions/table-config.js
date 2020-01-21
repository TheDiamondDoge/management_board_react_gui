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
            {value: "Action", label: "Action"},
            {value: "Informational", label: "Informational"},
            {value: "Decision", label: "Decision"},
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
            {value: "Active", label: "Active"},
            {value: "Postponed", label: "Postponed"},
            {value: "Closed", label: "Closed"},
            {value: "Did not occur", label: "Did not occur"},
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
            {value: "High", label: "High"},
            {value: "Medium", label: "Medium"},
            {value: "Low", label: "Low"},
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
        inputType: "textarea"
    },
    {
        id: "due",
        headerName: "Due Date",
        editable: true,
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect",
        inputType: "date"
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
        inputType: "textarea"
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
        inputType: "textarea"
    },
    {
        id: "createdDate",
        headerName: "Created Date",
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect"
    },
    {
        id: "closedDate",
        headerName: "Closed Date",
        style: {
            header: {
                width: 90
            }
        },
        searchType: "multiselect"
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
        searchType: "multiselect",
        inputType: "multiselect"
    },
];