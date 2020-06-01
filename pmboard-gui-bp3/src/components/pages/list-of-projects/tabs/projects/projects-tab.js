import React from "react";
import CustomCard from "../../../../card/custom-card";
import EnchantedTable from "../../../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import LoadingSpinner from "../../../../loading-spinner/loading-spinner";
import styles from "./projects-tab.module.css";
import {createEnchantedTableFilters} from "../../../../../util/util";

export default class ProjectsTab extends React.Component {
    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onReset();
    }

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
                    />
                </CustomCard>
            );
        }
    }
}