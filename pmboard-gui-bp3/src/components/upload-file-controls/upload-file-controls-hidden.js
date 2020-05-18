import React from 'react';
import PropTypes from 'prop-types';
import styles from "./upload-file-controls-hidden.module.css";

export default class UploadFileControlsHidden extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
        this.submitRef = React.createRef();
    }

    render() {
        const {uploadRef} = this.props;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        ref={uploadRef}
                        type="file"
                        onChange={this.onFilePick}
                        className={styles.hidden}
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

    onFilePick = (e) => {
        this.setState(
            {file: e.currentTarget.files[0]},
            () => this.submitRef.current.click()
        );
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData();
        data.append('file', this.state.file);
        this.props.onSubmit(data);
    };
}

UploadFileControlsHidden.propTypes = {
    uploadRef: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};