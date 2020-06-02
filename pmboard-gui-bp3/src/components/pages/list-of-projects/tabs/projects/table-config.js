import {dateDecorator, healthIndicatorsDecorator, projectNameUrlDecorator} from "../../../../../util/common-decorators/common-decorators";

export default [
    {
        id: "projectType",
        headerName: "Project Type",
        searchType: "multiselect",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        }
    },
    {
        id: "overallProjectHealth",
        headerName: "Overall Project Health",
        decorator: healthIndicatorsDecorator,
        style: {
            header: {
                width: "80px",
            },
            column: {
                width: "80px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "projectName",
        headerName: "Project Name",
        searchType: "input",
        style: {
            header: {
                width: "150px",
            },
            column: {
                width: "150px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        decorator: projectNameUrlDecorator
    },
    {
        id: "projectManager",
        headerName: "Project Manager",
        style: {
            header: {
                width: "130px",
            },
            column: {
                width: "130px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "businessLineManager",
        headerName: "Business Line Manager",
        style: {
            header: {
                width: "130px",
            },
            column: {
                width: "130px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "productLineManager",
        headerName: "Product Line Manager",
        style: {
            header: {
                width: "130px",
            },
            column: {
                width: "130px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "businessDivision",
        headerName: "Business Division",
        style: {
            header: {
                width: "90px",
            },
            column: {
                width: "90px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "businessUnit",
        headerName: "Business Unit",
        style: {
            header: {
                width: "90px",
            },
            column: {
                width: "90px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "productLine",
        headerName: "Product Line",
        style: {
            header: {
                width: "90px",
            },
            column: {
                width: "90px",
                textAlign: "center",
                verticalAlign: "middle",
                wordBreak: "break-all"
            }
        },
        searchType: "multiselect",
    },
    {
        id: "projectState",
        headerName: "Project State",
        style: {
            header: {
                width: "90px",
            },
            column: {
                width: "90px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
    },
    {
        id: "projectRigor",
        headerName: "Project Rigor",
        style: {
            header: {
                width: "90px",
            },
            column: {
                width: "90px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
    },
    {
        id: "orDate",
        headerName: "OR",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr0date",
        headerName: "DR0",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr1date",
        headerName: "DR1",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr2date",
        headerName: "DR2",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "ciDate",
        headerName: "CI",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr3date",
        headerName: "DR3",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "trDate",
        headerName: "TR (Internal DR4)",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr4date",
        headerName: "DR4",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr5date",
        headerName: "DR5",
        style: {
            header: {
                width: "100px",
            },
            column: {
                width: "100px",
                textAlign: "center",
                verticalAlign: "middle",
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "scheduleStatus",
        headerName: "Schedule",
        style: {
            header: {
                width: "80px",
            },
            column: {
                width: "80px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "contentStatus",
        headerName: "Content",
        style: {
            header: {
                width: "80px",
            },
            column: {
                width: "80px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "qualityStatus",
        headerName: "Quality",
        style: {
            header: {
                width: "80px",
            },
            column: {
                width: "80px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "costStatus",
        headerName: "Cost",
        style: {
            header: {
                width: "80px",
            },
            column: {
                width: "80px",
                textAlign: "center",
                verticalAlign: "middle"
            }
        },
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
];