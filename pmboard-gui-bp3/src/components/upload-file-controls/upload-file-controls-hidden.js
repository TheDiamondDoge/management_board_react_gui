import React from 'react';
import PropTypes from 'prop-types';
import styles from "./upload-file-controls-hidden.module.scss";

export default class UploadFileControlsHidden extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            files: null
        };
        this.submitRef = React.createRef();
    }

    render() {
        const {uploadRef} = this.props;
        const fileInputProps = this.getFileInputProps();
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        ref={uploadRef}
                        type="file"
                        onChange={this.onFilePick}
                        className={styles.hidden}
                        {...fileInputProps}
                    />
                    <input
                        ref={this.submitRef}
                        type="submit"
                        className={styles.hidden}
                    />
                </form>
            </div>
        );
    }

    getFileInputProps = () => {
        const {amount} = this.props;
        if (amount > 1) {
            return {multiple: true};
        }
        return {};
    }

    onFilePick = (e) => {
        const filesLimit = this.props.amount;
        const files = e.currentTarget.files;
        const {maxFileSize} = this.props;
        if (files.length > filesLimit) {
            const message = `Total amount of images should not exceed ${filesLimit}`;
            this.props.onError(message);
        } else if (!this.checkFilesSize(files, maxFileSize)) {
            const fileSizeMb = maxFileSize / 8 / 1024 / 1024;
            const message = `File size should be less than ${fileSizeMb} Mb`;
            this.props.onError(message);
        } else {
            this.setState(
                {files: files},
                () => this.submitRef.current.click()
            );
        }
    };

    checkFilesSize = (files, maxFileSize) => {
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > maxFileSize) {
                return false;
            }
        }

        return true;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData();
        const files = this.state.files;
        for (let i = 0; i < files.length; i++) {
            data.append('files', files[i]);
        }
        this.props.onSubmit(data);
    };
}

UploadFileControlsHidden.propTypes = {
    uploadRef: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    amount: PropTypes.number,
    onError: PropTypes.func,
    maxFileSize: PropTypes.number
};

UploadFileControlsHidden.defaultProps = {
    onAmountExceed: () => {},
    amount: 1,
    maxFileSize: 8 * 1024 * 1024
};