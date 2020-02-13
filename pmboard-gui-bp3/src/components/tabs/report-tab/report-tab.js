import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import UpdatedInfo from "../../updated-info/updated-info";
import styles from "./report-tab.module.css";
import Timeline from "../../timeline/timeline";
import classNames from "classnames";
import {Button, Divider, Intent, Menu, MenuItem, Popover, Position} from "@blueprintjs/core";
import HealthIndicatorsMinimal from "../../health-indicators-minimal/health-indicators-minimal";
import CustomQuill from "../../custom-quill/custom-quill";
import ItemList from "../../item-list/item-list";
import TwoItemsLiner from "../../two-items-liner/two-items-liner";


export default class ReportTab extends React.Component {
    render() {
        const uploadClasses = classNames(styles.inline_block, styles.float_right, styles.health_minimal);
        return (
            <>
                <CustomCard>
                    <div className={styles.inline_block}>
                        <UpdatedInfo date={"2020-02-12"}/>
                        <TwoItemsLiner first={"Project Name:"} second={<b>Project Pineapple</b>} />
                        <TwoItemsLiner first={"Project manager:"} second={<b>IKSANOV Aleksandr</b>} />
                    </div>
                    <div className={uploadClasses}>
                       {this.pptExportButton}
                    </div>
                    <HealthIndicatorsMinimal className={uploadClasses}/>
                    <br/>
                    <br/>
                    <br/>
                    <Timeline milestones={[]}/>
                </CustomCard>
                <br/>
                <CustomCard>
                    <CustomQuill value={"TEST"}
                                 header={<h3>Executive Status Summary</h3>}
                                 onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    />
                    <br/>
                    <CustomQuill value={"TEST"}
                                 header={<h3 className={styles.red}>Red Flag (executive action needed)</h3>}
                                 onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    />
                    <br/>
                    <CustomQuill value={"TEST"}
                                 header={<h3 className={styles.orange}>Orange Flag (core team action needed)</h3>}
                                 onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    />
                    <br/>
                    <CustomQuill value={"TEST"}
                                 header={<h3 className={styles.green}>Green Flag</h3>}
                                 onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    />
                </CustomCard>
                <br/>
                <CustomCard>
                    <CustomQuill value={"TEST"}
                                 header={<h3>Current Project Details</h3>}
                                 onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                    />
                </CustomCard>
                <br/>
                <CustomCard>
                    <h3>Risks</h3>
                    <Divider/>
                    <div>
                        <div className={styles.risk_block}>
                            <h4 className={styles.red}>High</h4>
                            <ItemList data={["Risk 1", "Risk 2", "Risk 3"]}/>
                        </div>
                        <div className={styles.risk_block}>
                            <Divider/>
                            <h4 className={styles.orange}>Moderate</h4>
                            <ItemList data={["Risk 4", "Risk 5", "Risk 6"]}/>
                        </div>
                        <div className={styles.risk_block}>
                            <Divider/>
                            <h4 className={styles.green}>Low</h4>
                            <ItemList data={["Risk 7", "Risk 8", "Risk 9"]}/>
                        </div>
                    </div>
                </CustomCard>
            </>
        );
    }

    pptMenu = (
        <Menu>
            <MenuItem text={"PowerPoint, program template"}/>
            <MenuItem text={"PowerPoint, multi-page & customizable"}/>
            <MenuItem text={"PowerPoint, multi-page & indicators"}/>
            <MenuItem text={"PowerPoint Exec review"}/>
            <Divider/>
            <MenuItem text={"Snapshot at 2019-12-09"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-08"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-07"} icon={"archive"}/>
            <MenuItem text={"Snapshot at 2019-12-06"} icon={"archive"}/>
        </Menu>
    );

    pptExportButton = (
        <Popover content={this.pptMenu} position={Position.BOTTOM}>
            <Button
                large
                minimal
                icon={"download"}
                intent={Intent.PRIMARY}
                text={"PPT Upload"}
            />
        </Popover>
    );
}