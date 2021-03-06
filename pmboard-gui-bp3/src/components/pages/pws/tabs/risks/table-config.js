import {boolToYesNo} from "../../../../../util/transform-funcs";
import {
    dateDecorator,
    errorDisplayDecorator,
    impactDecorator, preDecorator,
    probabilityDecorator
} from "../../../../../util/common-decorators/common-decorators";

export default [
    {
        id: "impact", headerName: "Impact",
        style: {
            header: {
                width: "70px"
            },
            column: {
                textAlign: "center",
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "probability", headerName: "Probability",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: probabilityDecorator
    },
    {
        id: "rating", headerName: "Rating",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: impactDecorator
    },
    {
        id: "previous", headerName: "Previous",
        style: {
            header: {
                width: "80px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "initial", headerName: "Initial",
        style: {
            header: {
                width: "70px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "riskDisplayId", headerName: "Risk ID",
        style: {
            header: {
                width: "80px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: errorDisplayDecorator
    },
    {
        id: "riskDescription", headerName: "Risk Description",
        style: {
            header: {
                width: "300px"
            },
            column: {
                wordBreak: "break-word"
            }
        },
        searchType: "input",
        decorator: (value) => {
            let result = errorDisplayDecorator(value);
            return preDecorator(result);
        }
    },
    {
        id: "impactDescription", headerName: "Impact Description",
        style: {
            header: {
                width: "300px"
            },
            column: {
                wordBreak: "break-word"
            }
        },
        searchType: "input",
        decorator: (value) => {
            let result = errorDisplayDecorator(value);
            return preDecorator(result);
        }
    },
    {
        id: "businessImpact", headerName: "Business Impact",
        style: {
            header: {
                width: "300px"
            },
            column: {
                wordBreak: "break-word"
            }
        },
        searchType: "input",
        decorator: (value) => {
            let result = errorDisplayDecorator(value);
            return preDecorator(result);
        }
    },
    {
        id: "riskResponse", headerName: "Risk Response",
        style: {
            header: {
                width: "100px"
            },
        },
        searchType: "input",
        decorator: (value) => {
            let result = errorDisplayDecorator(value);
            return preDecorator(result);
        }
    },
    {
        id: "mitigation", headerName: "Mitigation Plan Description",
        style: {
            header: {
                width: "300px"
            },
        },
        searchType: "input",
        decorator: (value) => {
            let result = errorDisplayDecorator(value);
            return preDecorator(result);
        }
    },
    {
        id: "decisionDate", headerName: "Decision Date",
        style: {
            header: {
                width: "120px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "estimatedCost", headerName: "Estimated Cost",
        style: {
            header: {
                width: "125px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "provisionBudget", headerName: "Provision for budget",
        style: {
            header: {
                width: "130px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "responsible", headerName: "Responsible",
        style: {
            header: {
                width: "120px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "target", headerName: "Target (Plan)",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "done", headerName: "Done (Do)",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "result", headerName: "Result (Check, Act)",
        style: {
            header: {
                width: "120px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "updatedOn", headerName: "Updated On",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "updatedBy", headerName: "Updated By",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input",
        decorator: errorDisplayDecorator
    },
    {
        id: "report", headerName: "Report",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect",
        inputType: "checkbox",
        editable: true,
        decorator: (data) => boolToYesNo(data)
    },
];