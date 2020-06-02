import React from "react";
import CustomCard from "../../../../card/custom-card";
import EnchantedTable from "../../../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import {createEnchantedTableFilters} from "../../../../../util/util";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import {ProjectData} from "../../../../../util/custom-types";
import {IndicatorsFilterLabels} from "../../../../../util/constants";

export default class ProjectsTab extends React.Component {
    render() {
        const {payload, loading} = this.props.projectsList;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const className = this.props.className;
            const customFilterLabels = this.getCustomIndicatorsFilters();
            const filters = createEnchantedTableFilters(payload, customFilterLabels);
            return (
                <CustomCard className={className}>
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

    renderFooter = ({amount}) => {
        const onRefresh = this.props.loadData;
        return <Footer amount={amount} onRefresh={onRefresh} />
    }

    getCustomIndicatorsFilters = () => ({
        overallProjectHealth: IndicatorsFilterLabels,
        scheduleStatus: IndicatorsFilterLabels,
        qualityStatus: IndicatorsFilterLabels,
        costStatus: IndicatorsFilterLabels,
        contentStatus: IndicatorsFilterLabels,
    });
}

ProjectsTab.propTypes = {
    loadData: PropTypes.func,
    projectsList: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(ProjectData)
    }),
};