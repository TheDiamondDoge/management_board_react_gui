import React from "react";
import CostTable from "../../cost-table/costTable";
import CustomCard from "../../card/custom-card";
import styles from "./cost-tab.module.css";
import UploadFileControls from "../../upload-file-controls/upload-file-controls";
import PropTypes from "prop-types";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import {getDateFromStringWithTime} from "../../../util/transform-funcs";
import {CostTabTypes} from "../../../util/custom-types"

export default class CostTab extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
        };
    }

    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
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
            const lastUpdated = getDateFromStringWithTime(updated);
            return (
                <>
                    <CustomCard>
                        <div>Last updated:
                            <span className={styles.last_updated}>{lastUpdated}</span>
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
                        <a href="http://www.google.com">Get template for upload</a>
                    </CustomCard>
                </>
            )
        }
    }
}

CostTab.propTypes = {
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    cost: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        payload: CostTabTypes
    })
};