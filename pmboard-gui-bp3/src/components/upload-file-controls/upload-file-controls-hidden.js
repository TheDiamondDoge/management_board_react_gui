import React from 'react';
import PropTypes from 'prop-types';
import styles from "./upload-file-controls-hidden.module.css";

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
        if (files.length > filesLimit) {
            this.props.onAmountExceed();
        } else {
            this.setState(
                {files: files},
                () => this.submitRef.current.click()
            );
        }
    };

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
    onAmountExceed: PropTypes.func,
};

UploadFileControlsHidden.defaultProps = {
    onAmountExceed: () => {},
    amount: 1
};