import React from 'react';
import {CustomCard} from "../../card/custom-card";
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

    editClickHandle = () => {
        this.setState((prevState) => ({
            editMode: !prevState.editMode,
        }))
    };

    render() {
        const {loaded} = this.props;
        if (!loaded) {
            return (<LoadingCard/>)
        } else {
            console.log("RENDER infoTab");
            const {general, urls, milestones, validationParams, onChangeGeneral} = this.props;
            return (
                <div>
                    <EditSaveControls onClick={this.editClickHandle} editMode={this.state.editMode}/>
                    <CustomCard>
                        {
                            Object.keys(general).map((obj) => (
                                displayOrNot(obj, validationParams)
                                    ? <div key={obj} className={styles.data_container}>
                                        <FieldName name={getLabelById(obj)}/>
                                        <FieldValue
                                            value={general[obj]}
                                            editMode={this.state.editMode}
                                            onChange={
                                                (value) => {
                                                    if (this.timeout) clearTimeout(this.timeout);
                                                    this.timeout = setTimeout(() => {
                                                        onChangeGeneral({
                                                            [obj]: value
                                                        }, "general")
                                                    }, 300);
                                                }
                                            }
                                        />
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
                            Object.keys(urls).map((obj) => (
                                displayOrNot(obj, validationParams)
                                    ? <div key={obj} className={styles.url_container}>
                                        <FieldName name={getLabelById(obj)}/>
                                        <FieldValue
                                            value={urls[obj]}
                                            editMode={this.state.editMode}
                                            onChange={
                                                (value) => {
                                                    if (this.timeout) clearTimeout(this.timeout);
                                                    this.timeout = setTimeout(() => {
                                                        onChangeGeneral({
                                                            [obj]: value
                                                        }, "urls")
                                                    }, 300);
                                                }
                                            }
                                        />
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
    general: PropTypes.object.isRequired,
    urls: PropTypes.object.isRequired,
    milestones: PropTypes.object.isRequired,
    loaded: PropTypes.bool,
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    onChangeGeneral: PropTypes.func,
};