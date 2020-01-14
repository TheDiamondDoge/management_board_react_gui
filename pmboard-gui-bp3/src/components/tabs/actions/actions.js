import React from 'react';
import CustomCard from "../../card/custom-card";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import {Intent, Button} from "@blueprintjs/core";

export default class Actions extends React.Component {
    render() {
        const {loading} = this.props;
        // if (loading) {
        if (false) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            return (
                <CustomCard autosize>
                    <EnchantedTable
                        data={[]}
                        columns={tableConfig}
                        editable
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

Actions.propTypes = {};