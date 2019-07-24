import React from 'react';
import Timeline from "../timeline/timeline";
import FieldName from "../fieldName/fieldName";
import FieldValue from "../fieldValue/fieldValue";
import styles from './summaryTab.module.css';
import {DEFAULT_FIELDS_SET} from './summaryTabObjects';

export default class SummaryTab extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Timeline/>
                <div className={styles.data_container}>
                    <div className={styles.left}>
                        <div>
                            {DEFAULT_FIELDS_SET.map((obj) => (
                                <div>
                                    <FieldName size={'50%'} name={obj.name}/>
                                    <FieldValue value={obj.value}/>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    <div className={styles.right}>
                        Pow
                    </div>
                </div>
            </div>
        )
    }
}