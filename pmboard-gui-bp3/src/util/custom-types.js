import PropTypes from 'prop-types';

export const NavigationMenuItemShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    catButtonName: PropTypes.string.isRequired,
    subMenus: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    )
});

export const MilestoneShape = PropTypes.shape({
    label: PropTypes.string,
    actualDate: PropTypes.string,
    baselineDate: PropTypes.string,
    completion: PropTypes.number,
    shown: PropTypes.bool,
    meetingMinutes: PropTypes.string,
});

const HealthStatusSet = PropTypes.shape({
    cost: PropTypes.number,
    overall: PropTypes.number,
    quality: PropTypes.number,
    schedule: PropTypes.number,
    scope: PropTypes.number
});

export const HealthIndicatorsShape = PropTypes.shape({
    currentStatusSet: PropTypes.string,
    prevStatusSet: PropTypes.string,
    statuses: PropTypes.shape({
        current: HealthStatusSet,
        prev: HealthStatusSet,
    }),
    comments: PropTypes.shape({
        cost: PropTypes.string,
        overall: PropTypes.string,
        quality: PropTypes.string,
        schedule: PropTypes.string,
        scope: PropTypes.string
    })
});

export const RequirementsShape = PropTypes.shape({
    dr1Actual: PropTypes.string,
    addedAfterDr1: PropTypes.number,
    committedAtDr1: PropTypes.number,
    modifiedAfterDr1: PropTypes.number,
    removedAfterDr1: PropTypes.number,
});

export const MilestoneKpiShape = PropTypes.shape({
    label: PropTypes.string,
    adherence: PropTypes.number,
    delay: PropTypes.number,
    duration: PropTypes.number
});

const QualityRow = PropTypes.shape({
    actual: PropTypes.string,
    objective: PropTypes.string,
    comment: PropTypes.string,
    rowNumber: PropTypes.number,
});

export const QualityIndicatorsShape = PropTypes.shape({
    backlog: PropTypes.arrayOf(QualityRow),
    defects: PropTypes.arrayOf(QualityRow),
    quality: PropTypes.arrayOf(QualityRow),
    testExecution: PropTypes.arrayOf(QualityRow),
    testRate: PropTypes.arrayOf(QualityRow),
    syncDate: PropTypes.string,
    updateInProcess: PropTypes.bool
});

export const FieldsToRenderShape = PropTypes.objectOf(
    PropTypes.shape({
        label: PropTypes.string,
        help: PropTypes.string
    }).isRequired
);

export const SummaryShape = PropTypes.shape({
    general: PropTypes.object,
    links: PropTypes.object,
    pwsInfo: PropTypes.object,
    status: PropTypes.object,
});

const BlcIndicators = PropTypes.shape({
    or: PropTypes.number,
    charter: PropTypes.number,
    prjPlan: PropTypes.number,
    tailoring: PropTypes.number,
    accPrgMgr: PropTypes.number,
    accCoreTeam: PropTypes.number,
    bpPlan: PropTypes.number,
    bpSales: PropTypes.number,
    launchPlan: PropTypes.number,
    launchSales: PropTypes.number,
    lessons: PropTypes.number,
    risks: PropTypes.number
});

export const BlcRow = PropTypes.shape({
    comment: PropTypes.string,
    csl: PropTypes.string,
    role: PropTypes.string,
    updatedOn: PropTypes.string,
    indicators: BlcIndicators.isRequired
});

export const BlcTab = PropTypes.shape({
    pm: BlcRow,
    pmo: BlcRow,
    sales: BlcRow,
});

export const EnchantedTableColsConfig = PropTypes.shape({
    id: PropTypes.string.isRequired,
    headerName: PropTypes.string.isRequired,
    decorator: PropTypes.func,
    searchType: PropTypes.oneOf([
        "input", "multiselect"
    ]),
    styles: PropTypes.shape({
        header: PropTypes.object,
        column: PropTypes.object,
    }),
    editable: PropTypes.bool,
    inputType: PropTypes.oneOf(
        ["text", "date", "select", "multiselect", "textarea", "numeric", "checkbox"]
    ),
    selectValues: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string, PropTypes.number, PropTypes.bool
            ]).isRequired,
            label: PropTypes.string.isRequired
        })
    )
});

export const RisksTabRisk = PropTypes.shape({
    riskId: PropTypes.number,
    impact: PropTypes.string,
    probability: PropTypes.string,
    rating: PropTypes.number,
    previous: PropTypes.string,
    initial: PropTypes.string,
    riskDescription: PropTypes.string,
    impactDescription: PropTypes.string,
    businessImpact: PropTypes.string,
    riskResponse: PropTypes.string,
    mitigation: PropTypes.string,
    estimatedCost: PropTypes.string,
    provisionBudget: PropTypes.string,
    responsible: PropTypes.string,
    relatedAction: PropTypes.string,
    target: PropTypes.string,
    done: PropTypes.string,
    result: PropTypes.string,
    report: PropTypes.bool
});

export const RiskMinimal = PropTypes.shape({
    rating: PropTypes.number,
    riskDescription: PropTypes.string,
    impactDescription: PropTypes.string,
    mitigation: PropTypes.string,
});

export const RisksTab = PropTypes.shape({
    risks: PropTypes.arrayOf(RisksTabRisk),
    fileExists: PropTypes.bool,
    lastUploaded: PropTypes.string
});

export const RqsTabRq = PropTypes.arrayOf(
    PropTypes.shape({
        reqId: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        fixVersions: PropTypes.arrayOf(PropTypes.string),
        components: PropTypes.string.isRequired,
    })
);

const CostRow = PropTypes.shape({
    state: PropTypes.number,
    milestone: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
});

const CostTable = PropTypes.shape({
    committed: CostRow,
    realized: CostRow,
});

export const CostTabTypes = PropTypes.shape({
    updated: PropTypes.string,
    charged: CostTable,
    capex: CostTable
});

export const BacklogDefectsTypes = PropTypes.shape({
    dev: PropTypes.arrayOf(PropTypes.number),
    in: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
    newIssues: PropTypes.arrayOf(PropTypes.number),
    out: PropTypes.arrayOf(PropTypes.number),
    qa: PropTypes.arrayOf(PropTypes.number),
    qaDone: PropTypes.arrayOf(PropTypes.number),
    updatedOn: PropTypes.string,
});

export const RiskReportType = PropTypes.shape({
    rating: PropTypes.number.isRequired,
    riskDescription: PropTypes.string,
    impactDescription: PropTypes.string,
    mitigation: PropTypes.string
});

export const ContribProject = PropTypes.shape({
    projectName: PropTypes.string,
    projectState: PropTypes.string,
    lastApproved: MilestoneShape,
    milestones: PropTypes.arrayOf(MilestoneShape)
});

export const ContribTable = PropTypes.shape({
    offer: PropTypes.arrayOf(ContribProject),
    contributed: PropTypes.arrayOf(ContribProject),
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    fileExport: PropTypes.bool,
});

export const ProjectDefaults = PropTypes.shape({
    projectId: PropTypes.number,
    projectName: PropTypes.string,
    projectType: PropTypes.string,
    projectDivision: PropTypes.string,
    metricsScope: PropTypes.string,
    requirementsUrl: PropTypes.string,
    workspaceStatus: PropTypes.string,
    dr1Actual: PropTypes.string,
    epm: PropTypes.bool,
    maintenance: PropTypes.bool
});

export const ExcelErrorTypes = PropTypes.shape({
    cellIndex: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
});

export const ReportTabTypes = PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    payload: PropTypes.shape({
        projectManager: PropTypes.string,
        projectName: PropTypes.string,
        updatedOn: PropTypes.string,
    }),
});

export const ReportImagesTypes = PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            filename: PropTypes.string.isRequired,
            base64Image: PropTypes.string.isRequired,
        })
    )
});

export const ReportSnapshotsTypes = PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            reportId: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
        })
    )
}).isRequired;

export const ProjectData = PropTypes.shape({
    businessDivision: PropTypes.string,
    businessLineManager: PropTypes.string,
    businessUnit: PropTypes.string,
    ciDate: PropTypes.string,
    contentStatus: PropTypes.number,
    costStatus: PropTypes.number,
    dr0date: PropTypes.string,
    dr1date: PropTypes.string,
    dr2date: PropTypes.string,
    dr3date: PropTypes.string,
    dr4date: PropTypes.string,
    dr5date: PropTypes.string,
    obrDate: PropTypes.string,
    orDate: PropTypes.string,
    overallProjectHealth: PropTypes.number,
    productLine: PropTypes.string,
    productLineManager: PropTypes.string,
    projectId: PropTypes.number.isRequired,
    projectManager: PropTypes.string,
    projectName: PropTypes.string,
    projectRelease: PropTypes.string,
    projectRigor: PropTypes.string,
    projectState: PropTypes.string,
    projectType: PropTypes.string,
    qualityStatus: PropTypes.number,
    scheduleStatus: PropTypes.number,
    trDate: PropTypes.string
});