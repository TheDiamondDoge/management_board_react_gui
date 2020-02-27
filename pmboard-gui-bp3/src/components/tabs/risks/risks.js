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

export default class Risks extends React.Component {
    render() {
        const {loading} = this.props.risks;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.risks;
            this.projectId = this.props.defaults.payload.projectId;
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
                                         onExcelImport={() => alert("Excel imported")}
                            />
                        )}
                    />
                </CustomCard>
            );
        }
    }

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
    saveRisk: PropTypes.func.isRequired
};