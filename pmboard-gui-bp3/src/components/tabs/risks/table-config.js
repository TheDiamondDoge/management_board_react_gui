export default [
    {
        id: "impact", headerName: "Impact",
        style: {
            header: {
                width: "70px"
            },
            column: {
                color: "blue", textAlign: "center"
            }
        },
        decorator: function (value) {
            return `${value} => decorated by decorator`;
        },
        editable: true,
        inputType: "textarea"
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
        editable: true,
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
        searchType: "input",
        editable: true,
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
        }
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
        }
    },
    {
        id: "riskId", headerName: "Risk ID",
        style: {
            header: {
                width: "80px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "multiselect"
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
        editable: true,
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
        }
    },
    {
        id: "riskResponse", headerName: "Risk Response",
        style: {
            header: {
                width: "100px"
            },
        }
    },
    {
        id: "mitigation", headerName: "Mitigation Plan Description",
        style: {
            header: {
                width: "300px"
            },
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    },
    {
        id: "result", headerName: "Result (Check, Act)",
        style: {
            header: {
                width: "110px"
            },
            column: {
                textAlign: "center"
            }
        }
    },
    {
        id: "imported", headerName: "Imported On",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        }
    },
    {
        id: "by", headerName: "Imported by",
        style: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        }
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
        }
    },
];