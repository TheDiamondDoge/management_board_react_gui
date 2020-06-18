import React from 'react';
import CustomCard from "../../../../card/custom-card";
import EnchantedTable from "../../../../enchanted-table/enchanted-table";
import PropTypes from 'prop-types';
import tableConfig from './table-config';
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import {ProjectDefaults, RqsTabRq} from "../../../../../util/custom-types";
import TableFooter from "./components/table-footer";
import styles from "./requirements-tab.module.scss";

export default class RequirementsTab extends React.Component {
    render() {
        const {loading} = this.props.rqs;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.rqs;
            const noDataMessage = "No data found. Check 'Requirements(JIRA)' and 'RQ Release Name(JIRA)' fields";
            return (
                <CustomCard className={styles.table_container}>
                    <EnchantedTable
                        striped
                        interactive
                        bordered
                        noDataMessage={noDataMessage}
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
        this.props.loadData()
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
