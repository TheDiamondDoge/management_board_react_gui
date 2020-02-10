import {arrayDecorator} from "../../../util/common-decorators";

export default [
    {
        id: "reqId",
        headerName: "Req-Id",
        searchType: "input",
    },
    {
        id: "headline",
        headerName: "Headline",
        searchType: "input",
    },
    {
        id: "priority",
        headerName: "Priority",
        searchType: "input",
    },
    {
        id: "status",
        headerName: "Status",
        searchType: "input",
    },
    {
        id: "fixVersions",
        headerName: "Fix versions",
        searchType: "input",
        decorator: arrayDecorator
    },
    {
        id: "components",
        headerName: "Components",
        searchType: "input",
    },
];