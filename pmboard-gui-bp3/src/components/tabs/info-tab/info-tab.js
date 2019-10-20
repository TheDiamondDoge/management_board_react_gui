import React from 'react';
import {CustomCard} from "../../card/custom-card";
import MilestoneTable from "../../milestone-table/milestone-table";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import styles from './info-tab.module.css'
import PropTypes from 'prop-types';
import Loading from "../../loading-card/loading";
import {displayOrNot, getLabelById} from "./fields";

export default class InfoTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            editMode: false,
        };
    }

    componentDidMount() {
        this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetData();
    }

    editClickHandle = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode,
        }))
    };

    render() {
        const {information, milestones} = this.props;
        if (information.loading) {
            return (<Loading/>)
        } else {
            const {general, urls, validationParams} = information.payload;
            return (
                <div>
                    <EditSaveControls onClick={this.editClickHandle} editMode={this.state.editMode}/>
                    <CustomCard>
                        {
                            mainRows(general, validationParams, this.state.editMode, "general")
                        }
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        {
                            milestones.loading
                                ? <Loading />
                                : <MilestoneTable
                                    editMode={this.state.editMode}
                                    milestonesData={milestones.payload}
                                  />
                        }
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        {
                            mainRows(urls, validationParams, this.state.editMode, "urls")
                        }
                    </CustomCard>
                </div>
            )
        }
    }
}

let mainRows = (general, validationParams, editMode, stateBranch) => {
    const style = selectClass(stateBranch);
    return (Object.keys(general).map((obj) => (
        displayOrNot(obj, validationParams)
            ? <div key={obj} className={style}>
                <FieldName name={getLabelById(obj)}/>
                <FieldValue
                    value={general[obj]}
                    editMode={editMode}
                />
            </div>
            : ""
    )))
};

let selectClass = (stateBranch) => {
    switch (stateBranch) {
        case "urls":
            return styles.url_container;
        case "general":
        default:
            return styles.data_container;
    }
};

//TODO: shape of milestones???
InfoTab.propTypes = {
    information: PropTypes.object.isRequired,
    milestones: PropTypes.array.isRequired,
    loadData: PropTypes.func,
    resetData: PropTypes.func,
};