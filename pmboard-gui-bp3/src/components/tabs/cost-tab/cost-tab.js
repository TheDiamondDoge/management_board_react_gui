import React from "react";
import CostTable from "../../cost-table/cost-table";
import CustomCard from "../../card/custom-card";
import styles from "./cost-tab.module.scss";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {CostTabTypes, ProjectDefaults} from "../../../util/custom-types"
import LastUpdated from "../../last-updated/last-updated";
import SafeUrl from "../../safe-url/safe-url";
import UploadFileControlsHidden from "../../upload-file-controls/upload-file-controls-hidden";
import {Button, Intent} from "@blueprintjs/core";
import LastUpdatedLabel from "../../last-updated-label/last-updated-label";
import renderFields from "./fields";
import RenderFieldHelper from "../../../util/render-field-helper";

export default class CostTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            templateUrl: "http://www.google.com"
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
            const {updated, charged, capex, fileExists} = this.props.cost.payload;
            const {uploadCost, getLastUploadedFile} = this.props;
            const {projectName} = this.props.defaults.payload;
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const showControls = renderHelper.displayOrNot("controls");

            const lastUploadedLabel = "Last uploaded:";
            const importLabel = "Import Cost File";
            const uploadTemplateLabel = "Get template for upload";
            return (
                <>
                    <CustomCard>
                        <div>
                            <LastUpdatedLabel
                                label={lastUploadedLabel}
                                isFileExists={fileExists}
                                onClick={() => getLastUploadedFile(projectName)}
                            />
                            <LastUpdated
                                className={styles.last_updated}
                                dateStr={updated}
                            />
                        </div>
                    </CustomCard>
                    <CustomCard>
                        {
                            showControls &&
                            <div className={styles.import_container}>
                                <Button
                                    text={importLabel}
                                    icon={"import"}
                                    onClick={this.openFileUploadDialog}
                                    intent={Intent.PRIMARY}
                                    minimal
                                />
                            </div>
                        }
                        <CostTable tableName={"Manpower (charged)"} data={charged}/>
                    </CustomCard>
                    <CustomCard>
                        <CostTable tableName={"CAPEX/OPEX"} data={capex}/>
                    </CustomCard>
                    <CustomCard>
                        <SafeUrl
                            label={uploadTemplateLabel}
                            url={this.state.template}
                        />
                    </CustomCard>

                    <UploadFileControlsHidden
                        uploadRef={this.uploadRef}
                        onSubmit={(file) => uploadCost(file)}
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
    getLastUploadedFile: PropTypes.func.isRequired,
    uploadCost: PropTypes.func.isRequired,
};