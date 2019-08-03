import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class EditSaveControls extends React.Component {
    render() {
        console.log("RENDER EditSave");
        const {onClick, editMode} = this.props;
        return (
            this.renderElements(editMode, onClick)
        )
    }

    renderElements = (editMode, onClick) => {
        if (editMode) {
            return (
                <div className={this.props.className}>
                    <Button
                        minimal={true}
                        text={"Save"}
                        icon={"saved"}
                        large={true}
                        onClick={onClick}
                        intent={Intent.SUCCESS}
                    />
                    <Button
                        minimal={true}
                        text={"Cancel"}
                        icon={"undo"}
                        large={true}
                        onClick={onClick}
                        intent={Intent.DANGER}
                    />
                </div>
            )
        } else {
            return (
                <div className={this.props.className}>
                    <Button
                        minimal={true}
                        text={"Edit"}
                        icon={"edit"}
                        large={true}
                        onClick={onClick}
                        intent={Intent.PRIMARY}
                    />
                </div>
            )
        }
    };
};

EditSaveControls.propTypes = {
    onClick: PropTypes.func,
    editMode: PropTypes.bool,
};
