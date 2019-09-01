import React from 'react';
import {CustomCard} from "../../card/customCard";
import MilestoneTable from "../../milestone-table/milestone-table";
import {FieldName} from "../../field-name/field-name";
import FieldValue from "../../field-value/field-value";
import EditSaveControls from "../../edit-save-contols/edit-save-controls";
import styles from './infoTab.module.css'
import PropTypes from 'prop-types';
import LoadingCard from "../../loading-card/loading-card";
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

    editClickHandle = () => (
        this.setState((prevState) => ({
            editMode: !prevState.editMode
        }))
    );

    render() {
        const {loaded} = this.props;
        if (!loaded) {
            return (<LoadingCard/>)
        } else {
            console.log("RENDER infoTab");
            const {general, urls, milestones, validationParams} = this.props.infoData;
            return (
                <div>
                    <EditSaveControls onClick={this.editClickHandle} editMode={this.state.editMode}/>
                    <CustomCard>
                        {
                            general.map((obj) => (
                                displayOrNot(obj.id, validationParams)
                                ? <div key={obj.id} className={styles.data_container}>
                                      <FieldName name={getLabelById(obj.id)}/>
                                      <FieldValue value={obj.value} editMode={this.state.editMode}/>
                                  </div>
                                : ""
                            ))
                        }
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        <MilestoneTable
                            editMode={this.state.editMode}
                            milestonesData={milestones}
                        />
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        {
                            urls.map((obj) => (
                                displayOrNot(obj.id, validationParams)
                                ? <div key={obj.id} className={styles.url_container}>
                                    <FieldName name={getLabelById(obj.id)}/>
                                    <FieldValue value={obj.value} editMode={this.state.editMode}/>
                                  </div>
                                : ""
                            ))
                        }
                    </CustomCard>
                </div>
            )
        }
    }
}

InfoTab.propTypes = {
    infoData: PropTypes.object.isRequired,
    loaded: PropTypes.bool,
    loadData: PropTypes.func,
    resetData: PropTypes.func,
};
