import React from 'react';
import {Button, Intent, FileInput} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class UploadFileControls extends React.Component {
    render() {
        const {onClick, editMode} = this.props;
        return (
            this.renderElements(editMode, onClick)
        )
    }

    renderElements = (editMode, onClick) => {
        if (editMode) {
            return (
                <div className={this.props.className}>
                    <FileInput
                        text={"Choose file..."}
                        large={true}
                        onInputChange={onClick}
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

UploadFileControls.propTypes = {
    onClick: PropTypes.func,
    editMode: PropTypes.bool,
    className: PropTypes.string,
};
