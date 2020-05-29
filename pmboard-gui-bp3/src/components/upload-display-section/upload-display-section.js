import React from "react";
import {Button, Divider, Icon, Intent} from "@blueprintjs/core";
import UploadedImage from "../uploaded-image/uploaded-image";
import PropTypes from "prop-types";
import UploadFileControlsHidden from "../upload-file-controls/upload-file-controls-hidden";
import styles from "./upload-display-section.module.css";
import classNames from "classnames";
import ConfirmationPopup from "../confirmation-popup/confirmation-popup";

export default class UploadDisplaySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmPopupOpen: false,
            deletedFilename: "",
        };

        this.uploadRef = React.createRef();
    }

    render() {
        const {buttonName, amount, files, onUpload, isUploading} = this.props;
        const title = `${buttonName} (max amount: ${amount})`;
        const confirmBody = "It is a permanent operation. You will not be able to restore deleted image.";
        const buttonClasses = classNames({[styles.section]: files.length !== 0});
        return (
            <div>
                <Button
                    minimal
                    loading={isUploading}
                    className={buttonClasses}
                    text={title}
                    icon={<Icon icon={"upload"} intent={Intent.PRIMARY}/>}
                    onClick={this.openFileDialog}
                />
                {
                    files.map((file) => {
                        return (
                            <>
                                <Divider />
                                <UploadedImage
                                    className={styles.section}
                                    key={file.filename}
                                    src={file.base64Image}
                                    onDelete={() => this.toggleConfirmDialog(file.filename)}
                                />
                            </>
                        )
                    })
                }
                <UploadFileControlsHidden
                    onSubmit={onUpload}
                    uploadRef={this.uploadRef}
                    amount={amount}
                    onAmountExceed={this.props.onAmountExceed}
                />
                <ConfirmationPopup
                    isOpen={this.state.isConfirmPopupOpen}
                    onClose={this.toggleConfirmDialog}
                    title={"Deletion confirmation"}
                    icon={<Icon icon={"warning-sign"} intent={Intent.DANGER}/>}
                    body={confirmBody}
                    footer={this.getConfirmFooter()}
                />
            </div>
        );
    }

    getConfirmFooter() {
        return (
            <>
                <Button onClick={this.handleDeletion}>
                    Delete
                </Button>
                <Button
                    intent={Intent.DANGER}
                    onClick={this.toggleConfirmDialog}
                >
                    Cancel
                </Button>
            </>
        )
    }

    handleDeletion = () => {
        this.props.onDelete(this.state.deletedFilename);
        this.toggleConfirmDialog("");
    }

    toggleConfirmDialog = (filename) => {
        this.setState((prev) => ({
            isConfirmPopupOpen: !prev.isConfirmPopupOpen,
            deletedFilename: filename
        }));
    };


    openFileDialog = () => {
        this.uploadRef.current.click();
    };
}

UploadDisplaySection.propTypes = {
    buttonName: PropTypes.string,
    isUploading: PropTypes.bool,
    amount: PropTypes.number,
    files: PropTypes.arrayOf(PropTypes.object),
    onAmountExceed: PropTypes.func,
    onUpload: PropTypes.func,
    onDelete: PropTypes.func,
};

UploadDisplaySection.defaultProps = {
    isUploading: false,
    buttonName: "Upload image",
    amount: 1,
    files: [],
    onUpload: () => {
    },
    onDelete: () => {
    },
    onAmountExceed: () => {
    }
};