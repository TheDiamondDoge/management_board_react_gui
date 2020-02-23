import React from 'react';
import {arrayDecorator} from "../../../util/common-decorators";
import SafeUrl from "../../safe-url/safe-url";

export default [
    {
        id: "reqId",
        headerName: "Req-Id",
        searchType: "input",
        decorator: function (value) {
            return <SafeUrl url={`http://www.jira.com/${value}`} label={value} />;
        }
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