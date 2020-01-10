import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import {Intent, Button} from "@blueprintjs/core";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import colSettings from "./table-config";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {RisksTabRisk} from "../../../util/custom-types";
import {getDistinctValsPerRow} from "../../../util/util";

export default class Risks extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    render() {
        const {loading} = this.props.risks;
        if (loading) {
            return <LoadingSpinner/>
        } else {
            const {payload} = this.props.risks;
            const picklists = getDistinctValsPerRow(payload);
            return (
                <>
                    <CustomCard autosize>
                        <EnchantedTable
                            data={payload}
                            columns={colSettings}
                            filterValues={picklists}
                            striped
                            interactive
                            bordered
                        />
                    </CustomCard>

                    <Button text={"Export to Excel"} icon={"export"} intent={Intent.PRIMARY} minimal large/>
                    <Button text={"Import Excel"} icon={"import"} intent={Intent.PRIMARY} minimal large/>
                </>
            );
        }
    }
}

Risks.propTypes = {
    risks: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: PropTypes.arrayOf(RisksTabRisk).isRequired
    }),
    loadData: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired
};