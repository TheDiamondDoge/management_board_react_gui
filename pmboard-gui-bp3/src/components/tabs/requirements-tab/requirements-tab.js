import React from 'react';
import CustomCard from "../../card/custom-card";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import PropTypes from 'prop-types';
import tableConfig from './table-config';
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {ProjectDefaults, RqsTabRq} from "../../../util/custom-types";
import TableFooter from "./components/table-footer";

export default class RequirementsTab extends React.Component {
    render() {
        const {loading} = this.props.rqs;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const {payload} = this.props.rqs;
            return (
                <CustomCard autosize yCardStart={260}>
                    <EnchantedTable
                        striped
                        interactive
                        bordered
                        data={payload}
                        columns={tableConfig}
                        renderFooter={() => (
                            <TableFooter onRefresh={this.handleLoadData}/>
                        )}
                    />
                </CustomCard>
            );
        }
    }

    handleLoadData = () => {
        this.props.loadData(this.projectId)
    };
}

RequirementsTab.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    rqs: PropTypes.shape({
        loading: PropTypes.bool,
        payload: RqsTabRq
    }),
};
