export default [
    {
        id: "impact", headerName: "Impact",
        styles: {
            header: {
                width: "70px"
            },
            column: {
                color: "blue", textAlign: "center"
            }
        },
        decorator: function (value) {
            return `${value} => decorated by decorator`;
        }
    },
    {
        id: "probability", headerName: "Probability",
        styles: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        }
    },
    {
        id: "rating", headerName: "Rating",
        styles: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        },
        searchType: "input"
    },
    {
        id: "previous", headerName: "Previous",
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
            header: {
                width: "300px"
            },
            column: {
                wordBreak: "break-word"
            }
        }
    },
    {
        id: "impactDescription", headerName: "Impact Description",
        styles: {
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
        styles: {
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
        styles: {
            header: {
                width: "100px"
            },
        }
    },
    {
        id: "mitigation", headerName: "Mitigation Plan Description",
        styles: {
            header: {
                width: "300px"
            },
        }
    },
    {
        id: "decisionDate", headerName: "Decision Date",
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
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
        styles: {
            header: {
                width: "90px"
            },
            column: {
                textAlign: "center"
            }
        }
    },
];