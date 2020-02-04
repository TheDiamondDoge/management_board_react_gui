import React from 'react';
import CustomCard from "../../card/custom-card";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import {Intent, Button} from "@blueprintjs/core";
import {createEnchantedTableFilters} from "../../../util/util";

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
            const {saveAction} = this.props;
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
                        renderFooter={
                            (tableFuncs) =>
                                <Button icon={"add"} intent={Intent.PRIMARY} minimal large onClick={tableFuncs.dialogOpen} />
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
    relatedRisks: PropTypes.arrayOf(PropTypes.number),
    saveAction: PropTypes.func,
    loadData: PropTypes.func,
    loadFilters: PropTypes.func,
    resetData: PropTypes.func,
};