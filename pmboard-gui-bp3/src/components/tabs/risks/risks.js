import React from 'react';
import CustomCard from "../../card/custom-card";
import {Intent, Button} from "@blueprintjs/core";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import colSettings from "./tableConfig";

export default class Risks extends React.Component {
    risks = [
        {
            impact: 1,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        },
        {
            impact: 2,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        }, {
            impact: 22,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        },
        {
            impact: 3,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        }, {
            impact: 4,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        },
        {
            impact: 5,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        }, {
            impact: 6,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        },
        {
            impact: 1,
            prob: "80%",
            rating: "High(16)",
            prev: 0,
            init: 1,
            riskId: 2.2,
            descr: "Description",
            impactDescr: "Huge",
            business: "Business",
            response: "Response",
            mitigation: "So many plans",
            decision: "20-12-2020",
            budget: "200ME",
            pfb: "Alot",
            responsible: "Ya",
            target: "SuperTarget",
            done: "DONE!?",
            result: "Eheheh",
            imported: "12-12-2012",
            by: "Iksnov",
            report: "Ofc"
        },
    ];

    render() {
        return (
            <>
                <CustomCard autosize>
                    <EnchantedTable
                        data={this.risks}
                        columns={colSettings}
                        striped
                        interactive
                        bordered
                    />
                </CustomCard>

                <Button text={"Export to Excel"} icon={"export"} intent={Intent.PRIMARY} minimal large/>
                <Button text={"Import Excel"} icon={"import"} intent={Intent.PRIMARY} minimal large/>
            </>
        );
    }
}