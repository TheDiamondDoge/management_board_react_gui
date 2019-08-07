import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class EditSaveControls extends React.Component {
    render() {
        console.log("RENDER EditSave");
        const {onClick, editMode, smallSize} = this.props;
        return (
            this.renderElements(editMode, smallSize, onClick)
        )
    }

    renderElements = (editMode, smallSize, onClick) => {
        let condProps = this.getButtonProps(smallSize);
        if (editMode) {
            return (
                <div className={this.props.className}>
                    <Button
                        {...condProps}
                        minimal={true}
                        icon={"saved"}
                        onClick={onClick}
                        intent={Intent.SUCCESS}
                    />
                    <Button
                        {...condProps}
                        minimal={true}
                        icon={"undo"}
                        onClick={onClick}
                        intent={Intent.DANGER}
                    />
                </div>
            )
        } else {
            condProps.text = "Edit";
            return (
                <div className={this.props.className}>
                    <Button
                        {...condProps}
                        minimal={true}
                        icon={"edit"}
                        onClick={onClick}
                        intent={Intent.PRIMARY}
                    />
                </div>
            )
        }
    };

    getButtonProps = (isSmall) => {
        if (isSmall) {
            return {}
        } else {
            return {
                text: "Save",
                large: true,
            }
        }
    };
};

EditSaveControls.propTypes = {
    onClick: PropTypes.func,
    editMode: PropTypes.bool,
    smallSize: PropTypes.bool,
    className: PropTypes.string,
};
