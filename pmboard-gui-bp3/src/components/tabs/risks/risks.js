import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from "../../card/custom-card";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import colSettings from "./table-config";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {RisksTabRisk} from "../../../util/custom-types";
import {createEnchantedTableFilters} from "../../../util/util";
import ContextMenu from "./components/context-menu";
import TableFooter from "./components/table-footer";

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
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {payload} = this.props.risks;
            const {saveRisk} = this.props;
            const picklists = createEnchantedTableFilters(payload);
            return (
                <CustomCard autosize>
                    <EnchantedTable
                        data={payload}
                        columns={colSettings}
                        filterValues={picklists}
                        onSubmit={saveRisk}
                        striped
                        interactive
                        bordered
                        editable
                        contextMenu={
                            (menuFuncs) => <ContextMenu onEdit={menuFuncs.editRow}/>
                        }
                        renderFooter={() => (
                            <TableFooter onExcelExport={() => alert("Excel exported")}
                                         onExcelImport={() => alert("Excel imported")}
                            />
                        )}
                    />
                </CustomCard>
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
    resetData: PropTypes.func.isRequired,
    saveRisk: PropTypes.func.isRequired
};