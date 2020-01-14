export default [
    {
        id: "registry",
        headerName: "Registry Type",
        editable: true,
        style: {
            header: {
                width: 80
            }
        }
        // inputType: "select"
    },
    {
        id: "uid",
        headerName: "Unique ID",
        style: {
            header: {
                width: 80
            }
        }
    },
    {
        id: "title",
        headerName: "Title",
        editable: true,
        inputType: "textarea",
        style: {
            header: {
                width: 150
            }
        }
    },
    {
        id: "state",
        headerName: "State",
        editable: true,
        style: {
            header: {
                width: 80
            }
        }
        // inputType: "select"
    },
    {
        id: "priority",
        headerName: "Priority",
        editable: true,
        style: {
            header: {
                width: 80
            }
        }
        // inputType: "select"
    },
    {
        id: "owner",
        headerName: "Owner",
        editable: true,
        style: {
            header: {
                width: 150
            }
        }
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
        // inputType: "datepicker"
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
    },
    {
        id: "closedDate",
        headerName: "Closed Date",
        style: {
            header: {
                width: 90
            }
        },
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
        // inputType: "multiselect"
    },
];