import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import colSettings from "./table-config";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {ProjectDefaults, RisksTab} from "../../../util/custom-types";
import {createEnchantedTableFilters} from "../../../util/util";
import ContextMenu from "./components/context-menu";
import TableFooter from "./components/table-footer";
import UploadFileControlsHidden from "../../upload-file-controls/upload-file-controls-hidden";
import ImportErrorsDialog from "../../import-errors-dialog/import-errors-dialog";
import LastUpdatedLabel from "../../last-updated-label/last-updated-label";
import LastUpdated from "../../last-updated/last-updated";
import styles from "../cost-tab/cost-tab.module.css";

export default class Risks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
        this.uploadRef = React.createRef();
    }

    render() {
        const {loading} = this.props.risks;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload, errorListShowed} = this.props.risks;
            const {uploadRisksFile, setErrorsShowedTrue, getLastUploadedFile, downloadRisks} = this.props;
            this.projectId = this.props.defaults.payload.projectId;
            const {projectName} = this.props.defaults.payload;
            const {errors} = this.props.risks;

            const picklists = createEnchantedTableFilters(payload.risks);
            return (
                <>
                    <CustomCard>
                        <div>
                            <LastUpdatedLabel isFileExists={payload.fileExists}
                                              onClick={() => getLastUploadedFile(this.projectId, projectName)}
                                              label={"Last uploaded:"}
                            />
                            <LastUpdated className={styles.last_updated} dateStr={"2010-10-10"}/>
                        </div>
                    </CustomCard>
                    <CustomCard autosize yCardStart={345}>
                        <EnchantedTable
                            data={payload.risks}
                            columns={colSettings}
                            filterValues={picklists}
                            onSubmit={this.handleSaveRisks}
                            striped
                            interactive
                            bordered
                            editable
                            contextMenu={
                                (menuFuncs) => <ContextMenu onEdit={menuFuncs.editRow}/>
                            }
                            renderFooter={() => (
                                <TableFooter onExcelExport={() => downloadRisks(this.projectId, projectName)}
                                             onExcelImport={this.openFileUploadDialog}
                                />
                            )}
                        />
                        <UploadFileControlsHidden uploadRef={this.uploadRef}
                                                  onSubmit={(file) => uploadRisksFile(this.projectId, file)}
                        />
                        <ImportErrorsDialog isOpen={!errorListShowed && !!errors}
                                            onClose={setErrorsShowedTrue}
                                            errors={errors}
                        />
                    </CustomCard>
                </>
            );
        }
    }

    openFileUploadDialog = () => {
        this.uploadRef.current.click();
    };

    handleSaveRisks = (data) => {
        this.props.saveRisk(this.projectId, data);
    };
}

Risks.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    risks: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: RisksTab
    }),
    saveRisk: PropTypes.func.isRequired,
    uploadRisksFile: PropTypes.func.isRequired,
    downloadRisks: PropTypes.func.isRequired,
    getLastUploadedFile: PropTypes.func.isRequired,
    setErrorsShowedTrue: PropTypes.func.isRequired,
};