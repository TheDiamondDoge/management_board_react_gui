import React from "react";
import {Button, Classes, Dialog, Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default function ConfirmationPopup(props) {
    const {isOpen, title, icon, body, onClose, onConfirm, onCancel, confirmLabel, cancelLabel} = props;
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            icon={icon}
        >
            <div className={Classes.DIALOG_BODY}>
                {body}
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button onClick={onConfirm}>
                        {confirmLabel}
                    </Button>
                    <Button
                        intent={Intent.DANGER}
                        onClick={onCancel}
                    >
                        {cancelLabel}
                    </Button>
                </div>
            </div>
        </Dialog>
    );
}

ConfirmationPopup.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.element,
    body: PropTypes.node,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmLabel: PropTypes.string,
    cancelLabel: PropTypes.string
};

ConfirmationPopup.defaultProps = {
    isOpen: false,
    title: "",
    onClose: () => {
    },
    onConfirm: () => {
    },
    onCancel: () => {
    },
    confirmLabel: "Confirm",
    cancelLabel: "Cancel"
};