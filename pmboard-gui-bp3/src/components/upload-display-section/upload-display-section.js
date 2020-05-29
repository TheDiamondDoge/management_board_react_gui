import React from "react";
import {Button, Divider, Icon, Intent} from "@blueprintjs/core";
import UploadedImage from "../uploaded-image/uploaded-image";
import PropTypes from "prop-types";
import UploadFileControlsHidden from "../upload-file-controls/upload-file-controls-hidden";
import styles from "./upload-display-section.module.css";

export default class UploadDisplaySection extends React.Component {
    constructor(props) {
        super(props);

        this.uploadRef = React.createRef();
    }

    render() {
        const {buttonName, amount, files, onUpload, isUploading} = this.props;
        const title = `${buttonName} (max amount: ${amount})`;
        return (
            <div>
                <Button
                    minimal
                    loading={isUploading}
                    className={styles.section}
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
                                    onDelete={() => this.props.onDelete(file.filename)}
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
            </div>
        );
    }

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