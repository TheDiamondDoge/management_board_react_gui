import {dateDecorator, healthIndicatorsDecorator, projectNameUrlDecorator} from "../../../../../util/common-decorators";

export default [
    {
        id: "projectType",
        headerName: "Project Type",
        searchType: "multiselect",
    },
    {
        id: "overallProjectHealth",
        headerName: "Overall Project Health",
        decorator: healthIndicatorsDecorator,
        searchType: "multiselect",
    },
    {
        id: "projectName",
        headerName: "Project Name",
        searchType: "input",
        decorator: projectNameUrlDecorator
    },
    {
        id: "projectManager",
        headerName: "Project Manager",
        searchType: "multiselect",
    },
    {
        id: "businessLineManager",
        headerName: "Business Line Manager",
        searchType: "multiselect",
    },
    {
        id: "productLineManager",
        headerName: "Product Line Manager",
        searchType: "multiselect",
    },
    {
        id: "businessDivision",
        headerName: "Business Division",
        searchType: "multiselect",
    },
    {
        id: "businessUnit",
        headerName: "Business Unit",
        searchType: "multiselect",
    },
    {
        id: "productLine",
        headerName: "Product Line",
        searchType: "multiselect",
    },
    {
        id: "projectState",
        headerName: "Project State",
        searchType: "multiselect",
    },
    {
        id: "projectRigor",
        headerName: "Project Rigor",
        searchType: "multiselect",
    },
    {
        id: "orDate",
        headerName: "OR",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr0date",
        headerName: "DR0",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr1date",
        headerName: "DR1",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr2date",
        headerName: "DR2",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "ciDate",
        headerName: "CI",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr3date",
        headerName: "DR3",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "trDate",
        headerName: "TR (Internal DR4)",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr4date",
        headerName: "DR4",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "dr5date",
        headerName: "DR5",
        searchType: "multiselect",
        decorator: dateDecorator
    },
    {
        id: "scheduleStatus",
        headerName: "Schedule",
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "contentStatus",
        headerName: "Content",
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "qualityStatus",
        headerName: "Quality",
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
    {
        id: "costStatus",
        headerName: "Cost",
        searchType: "multiselect",
        decorator: healthIndicatorsDecorator
    },
];