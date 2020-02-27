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
    actual: PropTypes.number,
    objective: PropTypes.number,
    comment: PropTypes.string,
    rowNumber: PropTypes.number,
});

export const QualityIndicatorsShape = PropTypes.shape({
    backlog: PropTypes.arrayOf(QualityRow),
    defects: PropTypes.arrayOf(QualityRow),
    quality: PropTypes.arrayOf(QualityRow),
    testExecution: PropTypes.arrayOf(QualityRow),
    testRate: PropTypes.arrayOf(QualityRow)
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
    validationParams: PropTypes.object,
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
    impact: PropTypes.number,
    probability: PropTypes.string,
    rating: PropTypes.number,
    previous: PropTypes.number,
    initial: PropTypes.number,
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
    offer: ContribProject,
    contributed: PropTypes.arrayOf(ContribProject),
    minDate: PropTypes.string,
    maxDate: PropTypes.string
});

export const ProjectDefaults = PropTypes.shape({
    projectId: PropTypes.number.isRequired,
    projectName: PropTypes.string
});