import React from 'react';
import {CustomCard} from "../../card/custom-card";
import classnames from "classnames";
import EnchantedTable from "../../enchanted-table/enchanted-table";

export default class Risks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {}
        };
    }

    data = [
        {id: 10, name: "Sasha", surname: "Iksanov"},
        {id: 20, name: "Vova", surname: "Ivanov"},
        {id: 30, name: "Valera", surname: "Petrov"},
    ];

    risks = [
        {
            impact: 1, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        }
    ];

    headers = [
        "Impact", "Probability", "Rating", "Previous", "Initial", "Risk ID", "Risk Description", "Impact Description",
        "Business Impact", "Risk Response", "Mitigation Plan Description", "Decision Date", "Estimated Cost", "Provision for budget",
        "Responsible", "Target (Plan)", "Done(Do)", "Result(Check, Act)", "Imported On", "Imported by", "Report"
    ];

    render() {
        return (
            <CustomCard>
               <EnchantedTable
                   headers={this.headers}
                   data={this.risks}
               />
            </CustomCard>
        );
    }
}