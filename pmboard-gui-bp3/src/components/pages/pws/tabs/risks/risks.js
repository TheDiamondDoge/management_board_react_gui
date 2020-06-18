import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../../../card/custom-card";
import EnchantedTable from "../../../../enchanted-table/enchanted-table";
import colSettings from "./table-config";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import {ProjectDefaults, RisksTab} from "../../../../../util/custom-types";
import {createEnchantedTableFilters} from "../../../../../util/util";
import ContextMenu from "./components/context-menu";
import TableFooter from "./components/table-footer";
import UploadFileControlsHidden from "../../../../upload-file-controls/upload-file-controls-hidden";
import ImportErrorsDialog from "../../../../import-errors-dialog/import-errors-dialog";
import LastUpdatedLabel from "../../../../last-updated-label/last-updated-label";
import LastUpdated from "../../../../last-updated/last-updated";
import styles from "./risk.module.scss";
import renderFields from "./fields";
import RenderFieldHelper from "../../../../../util/render-field-helper";
import SafeUrl from "../../../../safe-url/safe-url";

export default class Risks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null,
            url: "http://google.com"
        };
        this.uploadRef = React.createRef();
    }

    render() {
        const {loading} = this.props.risks;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload, errorListShowed} = this.props.risks;
            const {uploadRisksFile, setErrorsShowedTrue, getLastUploadedFile} = this.props;
            const {projectName} = this.props.defaults.payload;
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);

            const {errors} = this.props.risks;

            const picklists = createEnchantedTableFilters(payload.risks);
            const isImportDialogOpened = !errorListShowed && !!errors;
            return (
                <div className={styles.container}>
                    <CustomCard>
                        <div className={styles.last_updated_container}>
                            <LastUpdatedLabel
                                isFileExists={payload.fileExists}
                                onClick={() => getLastUploadedFile(projectName)}
                                label={"Last uploaded:"}
                            />
                            <LastUpdated
                                className={styles.last_updated}
                                dateStr={payload.lastUploaded}
                            />
                        </div>
                    </CustomCard>
                    <CustomCard className={styles.table_container}>
                        <EnchantedTable
                            data={payload.risks}
                            columns={colSettings}
                            filterValues={picklists}
                            onSubmit={this.handleSaveRisks}
                            striped
                            interactive
                            bordered
                            editable
                            contextMenu={this.getContextMenu(renderHelper)}
                            renderFooter={this.getTableFooter(renderHelper)}
                        />
                        <UploadFileControlsHidden
                            uploadRef={this.uploadRef}
                            onSubmit={(file) => uploadRisksFile(file)}
                        />
                        <ImportErrorsDialog
                            isOpen={isImportDialogOpened}
                            onClose={setErrorsShowedTrue}
                            errors={errors}
                        />
                    </CustomCard>
                    <CustomCard>
                        <SafeUrl
                            label={"Get template for upload"}
                            url={this.state.url}
                        />
                    </CustomCard>
                </div>
            );
        }
    }

    getContextMenu = (renderHelper) => {
        if (renderHelper.displayOrNot("controls")) {
            return (
                (menuFuncs) => <ContextMenu onEdit={menuFuncs.editRow}/>
            )
        }

        return null;
    }

    getTableFooter = (renderHelper) => {
        const downloadRisks = this.props.downloadRisks;
        const {projectName} = this.props.defaults.payload;
        const footerProps = {
            onExcelExport: () => downloadRisks(projectName)
        }

        if (renderHelper.displayOrNot("controls")) {
            footerProps.onExcelImport = this.openFileUploadDialog;
        }

        return (
            () => <TableFooter {...footerProps}/>
        )
    }

    openFileUploadDialog = () => {
        this.uploadRef.current.click();
    };

    handleSaveRisks = (data) => {
        this.props.saveRisk(data);
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