import React from 'react';
import {Button, Intent} from "@blueprintjs/core";
import styles from "./edit-save-controls.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class EditSaveControls extends React.PureComponent {
    render() {
        return (
            this.renderElements()
        )
    }

    renderElements = () => {
        let {className, smallSize, loading, editMode, onSubmit, onCancel, onClick, sticky} = this.props;
        let condProps = this.getButtonProps(smallSize);
        const classes = classNames(
            className,
            {[styles.sticky_controls]: sticky}
        );

        if (editMode) {
            return (
                <div className={classes}>
                    <Button
                        text={"Save"}
                        minimal
                        icon={"saved"}
                        onClick={onSubmit}
                        intent={Intent.SUCCESS}
                        {...condProps}
                    />
                    <Button
                        text={"Cancel"}
                        minimal
                        icon={"undo"}
                        onClick={onCancel}
                        intent={Intent.DANGER}
                        {...condProps}
                    />
                </div>
            )
        } else {
            if (!smallSize) {
                condProps.text = "Edit";
            }
            return (
                <div className={classes}>
                    <Button
                        minimal
                        icon={"edit"}
                        onClick={onClick}
                        intent={Intent.PRIMARY}
                        loading={loading}
                        {...condProps}
                    />
                </div>
            )
        }
    };

    getButtonProps = (isSmall) => {
        if (isSmall) {
            return {
                text: null
            }
        } else {
            return {
                large: true,
            }
        }
    };
};

EditSaveControls.propTypes = {
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    editMode: PropTypes.bool,
    smallSize: PropTypes.bool,
    className: PropTypes.string,
    loading: PropTypes.bool,
    sticky: PropTypes.bool
};

EditSaveControls.defaultProps = {
    onClick: () => {},
    onSubmit: () => {},
    onCancel: () => {},
    editMode: false,
    smallSize: false,
    className: '',
    loading: false,
    sticky: false
};
