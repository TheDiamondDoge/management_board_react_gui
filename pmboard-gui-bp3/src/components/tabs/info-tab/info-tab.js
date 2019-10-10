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
        const {loaded} = this.props;
        if (!loaded) {
            return (<Loading/>)
        } else {
            console.log("RENDER infoTab");
            const {general, urls, milestones, validationParams, onChangeGeneral, onChangeMilestones} = this.props;
            return (
                <div>
                    <EditSaveControls onClick={this.editClickHandle} editMode={this.state.editMode}/>
                    <CustomCard>
                        {
                            mainRows(general, validationParams, onChangeGeneral, this.state.editMode, "general")
                        }
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        <MilestoneTable
                            editMode={this.state.editMode}
                            milestonesData={milestones}
                            onChange={
                                milestonesOnChange(onChangeMilestones)
                            }
                        />
                    </CustomCard>

                    <br/>

                    <CustomCard>
                        {
                            mainRows(urls, validationParams, onChangeGeneral, this.state.editMode, "urls")
                        }
                    </CustomCard>
                </div>
            )
        }
    }
}

//TODO: TIMEOUTS WRAPPER (!!??!?!!)
let mainRows = (general, validationParams, onChangeGeneral, editMode, stateBranch) => {
    const style = selectClass(stateBranch);
    let timeout;
    return (Object.keys(general).map((obj) => (
        displayOrNot(obj, validationParams)
            ? <div key={obj} className={style}>
                <FieldName name={getLabelById(obj)}/>
                <FieldValue
                    value={general[obj]}
                    editMode={editMode}
                    onChange={
                        (e) => {
                            let value = e.target.value;
                            if (timeout) clearTimeout(timeout);
                            timeout = setTimeout(() => {
                                onChangeGeneral({
                                    [obj]: value
                                }, stateBranch)
                            }, 300);
                        }
                    }
                />
            </div>
            : ""
    )))
};

let milestonesOnChange = (onChangeMilestones) => {
    let timeout;
    return (
        (id, value, index) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChangeMilestones({
                    [id]: value
                }, index)
            }, 300);
        }
    )
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
    general: PropTypes.object.isRequired,
    urls: PropTypes.object.isRequired,
    milestones: PropTypes.array.isRequired,
    loaded: PropTypes.bool,
    loadData: PropTypes.func,
    resetData: PropTypes.func,
    onChangeGeneral: PropTypes.func,
    onChangeMilestones: PropTypes.func,
};