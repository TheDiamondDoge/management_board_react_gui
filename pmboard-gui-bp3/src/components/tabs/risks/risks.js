import React from 'react';
import CustomCard from "../../card/custom-card";
import classnames from "classnames";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import styles from "./risk.module.css";

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
        },
        {
            impact: 2, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        }, {
            impact: 22, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        },
        {
            impact: 3, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        }, {
            impact: 4, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        },
        {
            impact: 5, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        }, {
            impact: 6, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        },
        {
            impact: 1, prob: "80%", rating: "High(16)", prev: 0, init: 1, riskId: 2.2, descr: "Description", impactDescr: "Huge", business: "Business",
            response: "Response", mitigation: "So many plans", decision: "20-12-2020", budget: "200ME", pfb:"Alot", responsible: "Ya",
            target: "SuperTarget", done: "DONE!?", result: "Eheheh", imported: "12-12-2012", by: "Iksnov", report: "Ofc"
        },
    ];

    colSettings = [
        {id: "impact", headerName: "Impact", styles: {header: {color: "red"}, column: {color: "blue"}}},
        {id: "prob", headerName: "Probability"},
        {id: "rating", headerName: "Rating"},
        {id: "prev", headerName: "Previous"},
        {id: "init", headerName: "Initial"},
        {id: "riskId", headerName: "Risk ID"},
        {id: "descr", headerName: "Risk Description"},
        {id: "impactDescr", headerName: "Impact Description"},
        {id: "business", headerName: "Business Impact"},
        {id: "response", headerName: "Risk Response"},
        {id: "mitigation", headerName: "Mitigation Plan Description"},
        {id: "decision", headerName: "Decision Date"},
        {id: "budget", headerName: "Estimated Cost"},
        {id: "pfb", headerName: "Provision for budget"},
        {id: "responsible", headerName: "Responsible"},
        {id: "target", headerName: "Target (Plan)"},
        {id: "done", headerName: "Done(Do)"},
        {id: "result", headerName: "Result(Check, Act)"},
        {id: "imported", headerName: "Imported On"},
        {id: "by", headerName: "Imported by"},
        {id: "report", headerName: "Report"},
    ];

    render() {
        return (
            <CustomCard>
               <EnchantedTable
                   data={this.risks}
                   columns={this.colSettings}
               />
            </CustomCard>
        );
    }
}