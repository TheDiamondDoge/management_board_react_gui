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
    styles: PropTypes.shape({
        header: PropTypes.object,
        column: PropTypes.object,
    }),
});