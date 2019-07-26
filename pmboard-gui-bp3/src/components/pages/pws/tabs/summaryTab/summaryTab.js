import React from 'react';
import Timeline from "../../../../timeline/timeline";
import { FieldName } from "../../../../fieldName/fieldName";
import FieldValue from "../../../../fieldValue/fieldValue";
import styles from './summaryTab.module.css';
import {DEFAULT_MAIN_FIELDS_SET, DEFAULT_SECONDARY_FIELDS_SET_LEFT, DEFAULT_SECONDARY_FIELDS_SET_RIGHT, DEFAULT_PWS_FIELDS_SET} from './summaryTabObjects';
import classNames from 'classnames';
import { CustomCard } from "../../../../card/customCard.js";

export default class SummaryTab extends React.Component {
    render() {
        console.log("Summary tab", "Render");
        let mainCardStyle = classNames(styles.data_fields, styles.main_card);
        let secondaryCardStyle = classNames(styles.data_fields, styles.secondary_card);
        return (
            <div>
                <Timeline/>
                <br/>
                <CustomCard className={styles.data_container}>
                    <div className="left_part">
                        {
                            DEFAULT_MAIN_FIELDS_SET.map((obj, key) => (
                                <div key={key} className={mainCardStyle}>
                                    <FieldName name={obj.name}/>
                                    <FieldValue value={obj.value}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="right_part"></div>
                </CustomCard>

                <br/>

                <CustomCard className={styles.data_container}>
                    <div className="left_part">
                        {
                            DEFAULT_SECONDARY_FIELDS_SET_LEFT.map((obj, key) => (
                            <div key={key} className={secondaryCardStyle}>
                                <FieldName name={obj.name}/>
                                <FieldValue value={obj.value}/>
                            </div>
                            ))
                        }
                    </div>
                    <div className="right_part">
                        {
                            DEFAULT_SECONDARY_FIELDS_SET_RIGHT.map((obj, key) => (
                                <div key={key} className={secondaryCardStyle}>
                                    <FieldName name={obj.name}/>
                                    <FieldValue value={obj.value}/>
                                </div>
                            ))
                        }
                    </div>
                </CustomCard>

                <br/>

                <CustomCard className={styles.pws_data_container}>
                    <div>
                        {
                            DEFAULT_PWS_FIELDS_SET.map((obj, key) => (
                                <div key={key} className={styles.data_fields}>
                                    <FieldName name={obj.name}/>
                                    <FieldValue value={obj.value}/>
                                </div>
                            ))
                        }
                    </div>
                </CustomCard>
            </div>
        )
    }
}