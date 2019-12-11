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
        id: "prob", headerName: "Probability",
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
        }
    },
    {
        id: "prev", headerName: "Previous",
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
        id: "init", headerName: "Initial",
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
        }
    },
    {
        id: "descr", headerName: "Risk Description",
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
        id: "impactDescr", headerName: "Impact Description",
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
        id: "business", headerName: "Business Impact",
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
        id: "response", headerName: "Risk Response",
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
        id: "decision", headerName: "Decision Date",
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
        id: "budget", headerName: "Estimated Cost",
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
        id: "pfb", headerName: "Provision for budget",
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