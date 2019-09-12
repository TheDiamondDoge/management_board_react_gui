import React from "react";
import CostTable from "./costTable/costTable";
import {CustomCard} from "../../card/custom-card";
import styles from "./costTab.module.css";
import UploadFileControls from "../../upload-file-controls/upload-file-controls";

export default class CostTab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
        };
    }

    toggleControls = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode
        }));
    };

    render() {
        return (
            <>
                <CustomCard>
                    <div>Last updated:
                        <span className={styles.last_updated}>2019-08-03 14:10</span>
                    </div>
                </CustomCard>
                <br/>
                <CustomCard>
                    <UploadFileControls
                        editMode={this.state.editMode}
                        onClick={this.toggleControls}
                    />
                    <br/>
                    <CostTable tableName={"Effort"}/>
                </CustomCard>
                <br/>
                <CustomCard>
                    <CostTable tableName={"CAPEX/OPEX"}/>
                </CustomCard>

                <br/>
                <CustomCard>
                    <a href="http://www.google.com">Get template for upload</a>
                </CustomCard>
            </>
        )
    }
}