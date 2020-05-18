import React from 'react';
import CustomCard from "../../card/custom-card";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import EnchantedTable from "../../enchanted-table/enchanted-table";
import tableConfig from "./table-config";
import {createEnchantedTableFilters} from "../../../util/util";
import TableFooter from "./components/tableFooter";
import ContextMenu from "./components/contextMenu";
import validationSchema from "./validation-schema";
import renderFields from "./fields";
import {ProjectDefaults} from "../../../util/custom-types";
import RenderFieldHelper from "../../../util/render-field-helper";
import styles from "./actions.module.css";

export default class Actions extends React.Component {
    render() {
        const {loading} = this.props.actions;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            this.projectId = this.props.defaults.payload.projectId;
            const validationParams = this.props.defaults.payload;
            const renderHelper = new RenderFieldHelper(renderFields, validationParams);
            const {payload} = this.props.actions;
            const filters = createEnchantedTableFilters(payload);
            let editDynamicInputVals = {relatedRisks: this.getDynamicInputRisks()};

            return (
                <CustomCard className={styles.table_container}>
                    <EnchantedTable
                        data={payload}
                        columns={tableConfig}
                        filterValues={filters}
                        editDynamicInputVals={editDynamicInputVals}
                        onSubmit={this.handleSaveAction}
                        editable
                        striped
                        interactive
                        bordered
                        validationSchema={validationSchema}
                        contextMenu={this.getContextMenu(renderHelper)}
                        renderFooter={this.getTableFooter(renderHelper)}
                    />
                </CustomCard>
            )
        }
    }

    getDynamicInputRisks() {
        const {relatedRisks} = this.props;
        return relatedRisks !== undefined ? relatedRisks.map((number) => ({value: number, label: `${number}`})) : [];
    }

    getTableFooter = (renderHelper) => {
        const renderable = renderHelper.displayOrNot("controls");
        const props = {
            onRefresh: this.handleLoadData
        };
        return (
            (tableFuncs) => {
                if (renderable) {
                    props.onAdd = tableFuncs.dialogOpen;
                }
                return <TableFooter {...props}/>
            }
        )
    }


    getContextMenu = (renderHelper) => {
        if (renderHelper.displayOrNot("controls")) {
            return (
                (menuFuncs) =>
                    <ContextMenu
                        onEdit={menuFuncs.editRow}
                        onDelete={() => this.handleDeleteAction(menuFuncs.getRow().uid)}
                    />
            )
        }

        return null;
    };

    handleSaveAction = (data) => {
        this.props.saveAction(this.projectId, data);
    };

    handleDeleteAction = (data) => {
        this.props.deleteAction(this.projectId, data);
    };

    handleLoadData = () => {
        this.props.loadData(this.projectId);
    };
}

Actions.propTypes = {
    defaults: PropTypes.shape({
        payload: ProjectDefaults.isRequired,
        loading: PropTypes.bool.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.arrayOf(PropTypes.object),
    }),
    loadData: PropTypes.func.isRequired,
    relatedRisks: PropTypes.arrayOf(PropTypes.string),
    saveAction: PropTypes.func,
    deleteAction: PropTypes.func,
};