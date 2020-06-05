import React from 'react';
import {RenderControls} from "../controls/util-renderers";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./uploaded-image.module.scss";

export default class UploadedImage extends React.Component {
    render() {
        const {src, className} = this.props;
        const containerClasses = classNames(className, styles.container);
        return (
            <div className={containerClasses}>
                <div className={styles.controls}>
                    <RenderControls
                        type={"delete"}
                        onClick={() => this.props.onDelete()}
                    />
                </div>
                <div className={styles.image_container}>
                    <img
                        className={styles.image}
                        src={src}
                        alt={"Not loaded"}
                    />
                </div>
            </div>
        );
    }
}

UploadedImage.propTypes = {
    src: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
};

UploadedImage.defaultProps = {
    onDelete: () => {
    },
};