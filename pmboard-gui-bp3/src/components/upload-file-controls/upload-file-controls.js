import React from 'react';
import {Button, Intent, FileInput} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class UploadFileControls extends React.PureComponent {
    render() {
        return (
            this.renderElements()
        )
    }

    renderElements = () => {
        const {onClick, editMode, ...others} = this.props;
        if (editMode) {
            return (
                <div className={this.props.className} {...others}>
                    <FileInput
                        text={"Choose file..."}
                        onInputChange={onClick}
                    />
                </div>
            )
        } else {
            return (
                <div className={this.props.className} {...others}>
                    <Button
                        minimal={true}
                        text={"Edit"}
                        icon={"edit"}
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
