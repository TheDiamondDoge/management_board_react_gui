import React from 'react';
import {CustomCard} from "../../../../card/customCard";
import MilestoneTable from "../../../../milestoneTable/milestoneTable";
import {INFO_MAIN_INFO, INFO_URLS} from "./infoTabObject";
import {FieldName} from "../../../../fieldName/fieldName";
import {FieldValue} from "../../../../fieldValue/fieldValue";
import {Button, Intent} from "@blueprintjs/core";
import styles from './infoTab.module.css'

export default class InfoTab extends React.Component {
    state = {
        isLoading: false
    };

    render() {
        return (
            <div>
                <Button
                    minimal={true}
                    text={"Edit"}
                    icon={"edit"}
                    large={true}
                    loading={this.state.isLoading}
                    onClick={() => (this.setState((prevState) => ({isLoading: !prevState.isLoading})))}
                    intent={Intent.PRIMARY}
                />
                <CustomCard>
                    {
                        INFO_MAIN_INFO.map((obj, key) => (
                            <div key={key} className={styles.data_container}>
                                <FieldName name={obj.name}/>
                                <FieldValue value={obj.value}/>
                            </div>
                        ))
                    }
                </CustomCard>

                <br/>

                <CustomCard>
                    <MilestoneTable />
                </CustomCard>

                <br/>

                <CustomCard>
                    {
                        INFO_URLS.map((obj, key) => (
                            <div key={key} className={styles.url_container}>
                                <FieldName name={obj.name}/>
                                <FieldValue value={obj.value}/>
                            </div>
                        ))
                    }
                </CustomCard>
            </div>
        )
    }
}