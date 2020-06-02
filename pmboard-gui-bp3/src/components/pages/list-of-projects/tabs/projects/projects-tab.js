import React from "react";
import CustomCard from "../../../../card/custom-card";
import EnchantedTable from "../../../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import styles from "./projects-tab.module.css";
import {createEnchantedTableFilters} from "../../../../../util/util";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import {ProjectData} from "../../../../../util/custom-types";

export default class ProjectsTab extends React.Component {
    render() {
        const {payload, loading} = this.props.projectsList;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const filters = createEnchantedTableFilters(payload);
            return (
                <CustomCard className={styles.card}>
                    <EnchantedTable
                        data={payload}
                        columns={tableConfig}
                        filterValues={filters}
                        striped
                        interactive
                        bordered
                        renderFooter={this.renderFooter}
                    />
                </CustomCard>
            );
        }
    }

    renderFooter = () => {
        const amount = this.props.projectsList.payload.length;
        const onRefresh = this.props.loadData;
        return <Footer amount={amount} onRefresh={onRefresh} />
    }
}

ProjectsTab.propTypes = {
    loadData: PropTypes.func,
    projectsList: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(ProjectData)
    }),
};