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

export default class Actions extends React.Component {
    componentDidMount() {
        this.props.loadFilters();
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const {loading} = this.props.actions;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.actions;
            const {saveAction, deleteAction, loadData} = this.props;
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
                        onSubmit={saveAction}
                        editable
                        striped
                        interactive
                        bordered
                        validationSchema={validationSchema}
                        contextMenu={
                            (menuFuncs) =>
                                <ContextMenu onEdit={menuFuncs.editRow}
                                             onDelete={() => deleteAction(menuFuncs.getRow().uid)}
                                />
                        }
                        renderFooter={
                            (tableFuncs) =>
                                <TableFooter onRefresh={loadData} onAdd={tableFuncs.dialogOpen}/>
                        }
                    />
                </CustomCard>
            )
        }
    }
}

Actions.propTypes = {
    actions: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(PropTypes.object),
    }),
    relatedRisks: PropTypes.arrayOf(PropTypes.string),
    saveAction: PropTypes.func,
    deleteAction: PropTypes.func,
    loadData: PropTypes.func,
    loadFilters: PropTypes.func,
    resetData: PropTypes.func,
};