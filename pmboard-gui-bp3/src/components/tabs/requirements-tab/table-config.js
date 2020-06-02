import React from 'react';
import {arrayDecorator} from "../../../util/common-decorators/common-decorators";
import SafeUrl from "../../safe-url/safe-url";

export default [
    {
        id: "reqId",
        headerName: "Req-Id",
        searchType: "input",
        style: {
            column: {
                maxWidth: "100px"
            },
            header: {
                maxWidth: "100px"
            }
        },
        decorator: function (value) {
            const url = `http://www.jira.com/${value}`;
            return <SafeUrl url={url} label={value} />;
        }
    },
    {
        id: "headline",
        headerName: "Headline",
        searchType: "input",
        style: {
            column: {
                width: "300px"
            },
            header: {
                width: "300px"
            }
        },
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
        style: {
            column: {
                width: "300px"
            },
            header: {
                width: "300px"
            }
        },
    },
];