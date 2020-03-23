import React from "react";
import CostTable from "../../cost-table/cost-table";
import CustomCard from "../../card/custom-card";
import styles from "./cost-tab.module.css";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {CostTabTypes, ProjectDefaults} from "../../../util/custom-types"
import LastUpdated from "../../last-updated/last-updated";
import SafeUrl from "../../safe-url/safe-url";
import UploadFileControlsHidden from "../../upload-file-controls/upload-file-controls-hidden";
import {Button, Intent} from "@blueprintjs/core";

export default class CostTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };

        this.uploadRef = React.createRef();
    }

    toggleControls = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode
        }));
    };

    render() {
        const {loading} = this.props.cost;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {updated, charged, capex} = this.props.cost.payload;
            const {uploadCost} = this.props;
            const {projectId} = this.props.defaults.payload;
            return (
                <>
                    <CustomCard>
                        <div>
                            Last updated:
                            <LastUpdated className={styles.last_updated} dateStr={updated}/>
                        </div>
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <Button text={"Import Cost File"}
                                icon={"import"}
                                onClick={this.openFileUploadDialog}
                                intent={Intent.PRIMARY}
                                minimal
                        />
                        <br/>
                        <br/>
                        <CostTable tableName={"Effort"} data={charged}/>
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <CostTable tableName={"CAPEX/OPEX"} data={capex}/>
                    </CustomCard>

                    <br/>
                    <CustomCard>
                        <SafeUrl label={"Get template for upload"}
                                 url={"http://www.google.com"}
                        />
                    </CustomCard>

                    <UploadFileControlsHidden uploadRef={this.uploadRef}
                                              onSubmit={(file) => uploadCost(projectId, file)}
                    />
                </>
            )
        }
    }

    openFileUploadDialog = () => {
        this.uploadRef.current.click();
    };
}

CostTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    cost: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: CostTabTypes
    }),
    uploadCost: PropTypes.func.isRequired,
};