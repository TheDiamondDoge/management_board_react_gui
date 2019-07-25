import React from 'react';
import {CustomCard} from "../../../../card/customCard";
import MilestoneTable from "../../../../milestoneTable/milestoneTable";

export default class InfoTab extends React.Component {
    render() {
        return (
            <div>
                <CustomCard>
                    <MilestoneTable />
                </CustomCard>
            </div>
        )
    }
}