import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import UpdatedInfo from "../../updated-info/updated-info";
import styles from "./report-tab.module.css";
import Timeline from "../../timeline/timeline";
import ReactQuill from "react-quill";
import classNames from "classnames";
import {Button, Divider, Intent} from "@blueprintjs/core";
import HealthIndicatorsMinimal from "../../health-indicators-minimal/health-indicators-minimal";

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';


export default class ReportTab extends React.Component {
    render() {
        const uploadClasses = classNames(styles.inline_block, styles.float_right, styles.health_minimal);
        return (
            <>
                <CustomCard>
                    <div className={styles.inline_block}>
                        <UpdatedInfo date={"2020-02-12"}/>
                        <div className={styles.naming_block}>
                            <span className={styles.name}>Project name:</span>
                            <span>
                                <b>Project Pineapple</b>
                            </span>
                        </div>
                        <div className={styles.naming_block}>
                            <span className={styles.name}>Project manager:</span>
                            <span>
                                <b>IKSANOV Aleksandr</b>
                            </span>
                        </div>
                    </div>
                    <div className={uploadClasses}>
                        <Button
                            large
                            minimal
                            icon={"download"}
                            intent={Intent.PRIMARY}
                            text={"PPT Upload"}
                        />
                    </div>
                    <HealthIndicatorsMinimal className={uploadClasses}/>
                    <br/>
                    <br/>
                    <br/>
                    <Timeline milestones={[]}/>
                </CustomCard>
                <br/>
                <CustomCard>
                    <h3>Executive Status Summary</h3>
                    <ReactQuill readOnly value={"TEST"} onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>
                    <br/>
                    <h3 className={styles.red}>Red Flag (executive action needed)</h3>
                    <ReactQuill readOnly value={"TEST"} onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>
                    <br/>
                    <h3 className={styles.orange}>Orange Flag (core team action needed)</h3>
                    <ReactQuill readOnly value={"TEST"} onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>
                    <br/>
                    <h3 className={styles.green}>Green Flag</h3>
                    <ReactQuill readOnly value={"TEST"} onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>
                </CustomCard>
                <br/>
                <CustomCard>
                    <h3>Current Project Details</h3>
                    <ReactQuill readOnly value={"TEST"} onChange={(x, q, w, e, r) => console.log(x, q, w, e)}/>
                </CustomCard>
                <br/>
                <CustomCard>
                    <h3>Risks</h3>
                    <Divider/>
                    <div>
                        <div className={styles.risk_block}>
                            <h4 className={styles.red}>High</h4>
                            <ul>
                                <li>Risk 1</li>
                                <li>Risk 2</li>
                                <li>Risk 3</li>
                            </ul>
                        </div>
                        <div className={styles.risk_block}>
                            <Divider/>
                            <h4 className={styles.orange}>Moderate</h4>
                            <ul>
                                <li>Risk 4</li>
                                <li>Risk 5</li>
                                <li>Risk 6</li>
                            </ul>
                        </div>
                        <div className={styles.risk_block}>
                            <Divider/>
                            <h4 className={styles.green}>Low</h4>
                            <ul>
                                <li>Risk 7</li>
                                <li>Risk 8</li>
                                <li>Risk 9</li>
                            </ul>
                        </div>
                    </div>
                </CustomCard>
            </>
        );
    }


}