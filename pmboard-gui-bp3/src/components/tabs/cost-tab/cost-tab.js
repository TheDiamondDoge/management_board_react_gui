import React from "react";
import CostTable from "../../cost-table/cost-table";
import CustomCard from "../../card/custom-card";
import styles from "./cost-tab.module.css";
import UploadFileControls from "../../upload-file-controls/upload-file-controls";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {CostTabTypes} from "../../../util/custom-types"
import LastUpdated from "../../last-updated/last-updated";
import SafeUrl from "../../safe-url/safe-url";

export default class CostTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    toggleControls = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode
        }));
    };

    render() {
        const {loading} = this.props.cost;
        if (loading) {
            return <CustomCard><LoadingSpinner/></CustomCard>
        } else {
            const {updated, charged, capex} = this.props.cost.payload;
            return (
                <>
                    <CustomCard>
                        <div>
                            Last updated:
                            <LastUpdated className={styles.last_updated} dateStr={updated}/>
                        </div>
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <UploadFileControls
                            editMode={this.state.editMode}
                            onClick={this.toggleControls}
                        />
                        <br/>
                        <CostTable tableName={"Effort"} data={charged}/>
                    </CustomCard>
                    <br/>
                    <CustomCard>
                        <CostTable tableName={"CAPEX/OPEX"} data={capex}/>
                    </CustomCard>

                    <br/>
                    <CustomCard>
                        <SafeUrl label={"Get template for upload"}
                                 url={"http://www.google.com"}
                        />
                    </CustomCard>
                </>
            )
        }
    }
}

CostTab.propTypes = {
    cost: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: CostTabTypes
    })
};