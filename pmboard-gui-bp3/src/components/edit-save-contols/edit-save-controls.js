import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class EditSaveControls extends React.Component {
    render() {
        const {onSubmit, onCancel, onClick, editMode, smallSize} = this.props;
        return (
            this.renderElements(editMode, smallSize, onSubmit, onCancel, onClick)
        )
    }

    renderElements = (editMode, smallSize, onSubmit, onCancel, onClick) => {
        let condProps = this.getButtonProps(smallSize);
        if (editMode) {
            return (
                <div className={this.props.className}>
                    <Button
                        text={"Save"}
                        minimal={true}
                        icon={"saved"}
                        onClick={onSubmit}
                        intent={Intent.SUCCESS}
                        {...condProps}
                    />
                    <Button
                        text={"Cancel"}
                        minimal={true}
                        icon={"undo"}
                        onClick={onCancel}
                        intent={Intent.DANGER}
                        {...condProps}
                    />
                </div>
            )
        } else {
            if (!smallSize) condProps.text = "Edit";
            return (
                <div className={this.props.className}>
                    <Button
                        minimal={true}
                        icon={"edit"}
                        onClick={onClick}
                        intent={Intent.PRIMARY}
                        {...condProps}
                    />
                </div>
            )
        }
    };

    getButtonProps = (isSmall) => {
        if (isSmall) {
            return {
                text: null
            }
        } else {
            return {
                large: true,
            }
        }
    };
};

EditSaveControls.propTypes = {
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    editMode: PropTypes.bool,
    smallSize: PropTypes.bool,
    className: PropTypes.string,
};
