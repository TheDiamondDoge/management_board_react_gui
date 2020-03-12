import React from 'react';
import PropTypes from 'prop-types';
import styles from "./upload-file-controls-hidden.module.css";

export default class UploadFileControlsHidden extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
    }

    render() {
        const {submitRef, uploadRef} = this.props;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input ref={uploadRef}
                           type="file"
                           onChange={this.onFilePick}
                           className={styles.hidden}
                    />
                    <input ref={submitRef} type="submit" className={styles.hidden}/>
                </form>
            </div>
        );
    }

    onFilePick = (e) => {
        const {submitRef} = this.props;
        this.setState(
            {file: e.currentTarget.files[0]},
            () => submitRef.current.click()
        );
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.props.onSubmit(this.state.file);
    };
}

UploadFileControlsHidden.propTypes = {
    submitRef: PropTypes.object.isRequired,
    uploadRef: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};