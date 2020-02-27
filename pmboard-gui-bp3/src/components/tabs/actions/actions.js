import React from 'react';
import CustomCard from "../../card/custom-card";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import {createEnchantedTableFilters} from "../../../util/util";
import TableFooter from "./components/tableFooter";
import ContextMenu from "./components/contextMenu";
import validationSchema from "./validation-schema";
import {ProjectDefaults} from "../../../util/custom-types";

export default class Actions extends React.Component {
    render() {
        const {loading} = this.props.actions;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const {payload} = this.props.actions;
            const filters = createEnchantedTableFilters(payload);
            let relatedRisks = this.props.relatedRisks;
            if (relatedRisks !== undefined) {
                relatedRisks = relatedRisks.map((number) => ({value: number, label: `${number}`}))
            }
            let editDynamicInputVals = {relatedRisks: relatedRisks};

            return (
                <CustomCard autosize>
                    <EnchantedTable
                        data={payload}
                        columns={tableConfig}
                        filterValues={filters}
                        editDynamicInputVals={editDynamicInputVals}
                        onSubmit={this.handleSaveAction}
                        editable
                        striped
                        interactive
                        bordered
                        validationSchema={validationSchema}
                        contextMenu={
                            (menuFuncs) =>
                                <ContextMenu onEdit={menuFuncs.editRow}
                                             onDelete={() => this.handleDeleteAction(menuFuncs.getRow().uid)}
                                />
                        }
                        renderFooter={
                            (tableFuncs) =>
                                <TableFooter onRefresh={this.handleLoadData} onAdd={tableFuncs.dialogOpen}/>
                        }
                    />
                </CustomCard>
            )
        }
    }

    handleSaveAction = (data) => {
        this.props.saveAction(this.projectId, data);
    };

    handleDeleteAction = (data) => {
        this.props.deleteAction(this.projectId, data);
    };

    handleLoadData = () => {
        this.props.loadData(this.projectId);
    };
}

Actions.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(PropTypes.object),
    }),
    loadData: PropTypes.func.isRequired,
    relatedRisks: PropTypes.arrayOf(PropTypes.string),
    saveAction: PropTypes.func,
    deleteAction: PropTypes.func,
};