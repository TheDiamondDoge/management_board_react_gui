import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import colSettings from "./table-config";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {ProjectDefaults, RisksTabRisk} from "../../../util/custom-types";
import {createEnchantedTableFilters} from "../../../util/util";
import ContextMenu from "./components/context-menu";
import TableFooter from "./components/table-footer";
import UploadFileControlsHidden from "../../upload-file-controls/upload-file-controls-hidden";
import {Classes, Dialog, Icon} from "@blueprintjs/core";
import ExcelError from "../../excel-error/excel-error";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";

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
            const {payload} = this.props.risks;
            const {uploadRisksFile} = this.props;
            this.projectId = this.props.defaults.payload.projectId;
            const {errors} = this.props.risks;

            const picklists = createEnchantedTableFilters(payload);
            return (
                <CustomCard autosize>
                    <EnchantedTable
                        data={payload}
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
                            <TableFooter onExcelExport={() => alert("Excel exported")}
                                         onExcelImport={this.openFileUploadDialog}
                            />
                        )}
                    />
                    <UploadFileControlsHidden uploadRef={this.uploadRef}
                                              onSubmit={(file) => uploadRisksFile(this.projectId, file)}
                    />
                    {this.shouldDialogRender(!!errors)}
                </CustomCard>
            );
        }
    }

    shouldDialogRender(condition) {
        if (condition) {
            const {errors} = this.props.risks;
            return (
                <Dialog isOpen={condition} title={"Warning"} icon={<Icon icon={"warning-sign"} intent={Intent.WARNING}/>}>
                    <div className={Classes.DIALOG_BODY}>
                        Risks uploaded with following errors:
                        <ul>
                            {errors.map(err => <li><ExcelError {...err}/></li>)}
                        </ul>
                    </div>
                </Dialog>
            )
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
        payload: PropTypes.arrayOf(RisksTabRisk).isRequired
    }),
    saveRisk: PropTypes.func.isRequired,
    uploadRisksFile: PropTypes.func.isRequired
};