import React from 'react';
import CustomCard from "../../card/custom-card";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import {Intent, Button} from "@blueprintjs/core";
import {getDistinctValsPerRow} from "../../../util/util";

export default class Actions extends React.Component {
    componentDidMount() {
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
            const filters = getDistinctValsPerRow(payload);
            console.log(filters);
            return (
                <CustomCard autosize>
                    <EnchantedTable
                        data={payload}
                        columns={tableConfig}
                        filterValues={filters}
                        editable
                        striped
                        interactive
                        bordered
                        renderFooter={
                            (tableFuncs) =>
                                <Button icon={"add"} intent={Intent.PRIMARY} minimal large onClick={tableFuncs.onDialogOpen} />
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
    loadData: PropTypes.func,
    resetData: PropTypes.func,
};