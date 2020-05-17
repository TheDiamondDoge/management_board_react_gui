import React from 'react';
import {HTMLTable} from "@blueprintjs/core";
import FieldName from "../field-name/field-name";
import FieldValue from "../field-value/field-value";
import styles from './milestone-table.module.css';
import PropTypes from "prop-types";
import {FieldArray} from "formik";
import FormikInput, {ArrayErrors, RenderControls} from "../controls/util-renderers";
import {boolToYesNo, dateFormatToString} from "../../util/transform-funcs";
import {MilestoneShape} from "../../util/custom-types";

export default class MilestoneTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            milestonesRendered: [],
            withoutBaselineDate: ["OR", "DR0", "DR1"],
            shownAlwaysTrue: ["DR1", "DR4"],
            excluded: ["OR"]
        };
    }

    render() {
        return (
            <div>
                <HTMLTable striped className={styles.table}>
                    <colgroup>
                        <col className={styles.label}/>
                        <col className={styles.actual}/>
                        <col className={styles.baseline}/>
                        <col className={styles.completion}/>
                        <col className={styles.timeline}/>
                        <col className={styles.minutes}/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th>
                            <FieldName name={"Project Milestone Label"}/>
                        </th>
                        <th className={styles.align_center}>
                            <FieldName name={"Actual/Forecast Date"}/>
                        </th>
                        <th className={styles.align_center}>
                            <FieldName name={"Baseline Date"}/>
                        </th>
                        <th className={styles.align_center}>
                            <FieldName name={"Milestone Completion (%)"}/>
                        </th>
                        <th className={styles.align_center}>
                            <FieldName name={"Shown in Timeline"}/>
                        </th>
                        <th className={styles.align_center}>
                            <FieldName name={"Milestone meeting minutes"}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.renderBody()
                    }
                    </tbody>
                </HTMLTable>
            </div>
        )
    }

    renderBody = () => {
        const {onDateChangeFactory, editMode} = this.props;
        return (
            <FieldArray
                name="milestones"
                render={(arrayHelpers) => {
                    let renderedMilestones = [];
                    return (
                        <>
                            {
                                arrayHelpers.form.values.milestones.map((milestone, key) => {
                                    const shownString = boolToYesNo(milestone.shown);
                                    const hasBaseline = this.hasBaseline(milestone);
                                    const shouldBeExcluded = this.shouldBeExcluded(milestone);
                                    const labelEditable = this.isLabelEditable(milestone, renderedMilestones);
                                    const shouldBeShown = this.shownShouldBeLocked(milestone);
                                    const name = `milestones[${key}].label`;

                                    renderedMilestones.push(milestone.label);
                                    return (
                                        shouldBeExcluded ||
                                        <tr key={key}>
                                            <td className={styles.label}>
                                                {
                                                    labelEditable
                                                        ? <>
                                                            <FormikInput
                                                                type="text"
                                                                name={name}
                                                            />
                                                            {
                                                                this.rowRemoveControls(() => arrayHelpers.remove(key))
                                                            }
                                                        </>
                                                        : <FieldValue value={milestone.label}/>
                                                }
                                            </td>
                                            <td className={styles.actual}>
                                                {
                                                    editMode
                                                        ? <FormikInput
                                                            type="date"
                                                            name={`milestones[${key}].actualDate`}
                                                            onChange={onDateChangeFactory(`milestones[${key}].actualDate`)}
                                                        />
                                                        : <FieldValue
                                                            value={dateFormatToString(new Date(milestone.actualDate))}/>
                                                }
                                            </td>
                                            <td className={styles.baseline}>
                                                {
                                                    editMode && hasBaseline
                                                        ? <FormikInput
                                                            type="date"
                                                            name={`milestones[${key}].baselineDate`}
                                                            onChange={onDateChangeFactory(`milestones[${key}].baselineDate`)}
                                                        />
                                                        : <FieldValue
                                                            value={dateFormatToString(new Date(milestone.baselineDate))}/>
                                                }
                                            </td>
                                            <td className={styles.completion}>
                                                {
                                                    editMode
                                                        ? <FormikInput
                                                            type="numeric"
                                                            name={`milestones[${key}].completion`}
                                                            onValueChange={onDateChangeFactory(`milestones[${key}].completion`)}
                                                        />
                                                        : <FieldValue value={milestone.completion}/>
                                                }
                                            </td>
                                            <td className={styles.timeline}>
                                                {
                                                    editMode && !shouldBeShown
                                                        ? <FormikInput
                                                            type="checkbox"
                                                            name={`milestones[${key}].shown`}
                                                            value={milestone.shown}
                                                        />
                                                        : <FieldValue value={shownString}/>
                                                }
                                            </td>
                                            <td className={styles.minutes}>
                                                {
                                                    editMode
                                                        ? <FormikInput
                                                            type="text"
                                                            name={`milestones[${key}].meetingMinutes`}
                                                        />
                                                        : <FieldValue value={milestone.meetingMinutes}/>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                            {
                                editMode &&
                                <>
                                    <tr>
                                        <td colSpan={6}>
                                            <ArrayErrors errors={arrayHelpers.form.errors} name={"milestones"}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} className={styles.align_center}>
                                            {this.rowAddControls(arrayHelpers.push)}
                                        </td>
                                    </tr>
                                </>
                            }
                        </>
                    )
                }}
            />
        )
    };

    shouldBeExcluded = (milestone) => (
        this.state.excluded.includes(milestone.label.toUpperCase())
    );

    hasBaseline = (milestone) => (
        !this.state.withoutBaselineDate.includes(milestone.label.toUpperCase())
    );

    isLabelEditable = (milestone, renderedMilestones) => {
        const editMode = this.props.editMode;
        return ((editMode && !this.isMandatory(milestone.label))
            || (editMode && renderedMilestones.includes(milestone.label.toUpperCase())));
    };

    isMandatory = (label) => {
        return this.props.mandatoryMilestones.includes(label.toUpperCase())
    };

    shownShouldBeLocked = (milestone) => (
        this.state.shownAlwaysTrue.includes(milestone.label.toUpperCase())
    );

    rowRemoveControls = (remove) => (
        <RenderControls type={"delete"} onClick={remove}/>
    );

    rowAddControls = (push) => (
        <RenderControls type={"add"} onClick={() => push(this.getEmptyMilestone())}/>
    );

    getEmptyMilestone = () => ({
        label: "",
        actualDate: null,
        baselineDate: null,
        completion: 0,
        shown: false,
        meetingMinutes: ""
    });
}

MilestoneTable.propTypes = {
    editMode: PropTypes.bool,
    milestonesData: PropTypes.arrayOf(MilestoneShape),
    onChange: PropTypes.func,
    mandatoryMilestones: PropTypes.arrayOf(PropTypes.string)
};