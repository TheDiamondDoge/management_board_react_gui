import React from "react";
import {Classes, Dialog} from "@blueprintjs/core";
import PropTypes from "prop-types";

export default class ConfirmationPopup extends React.Component {
    render() {
        const {isOpen, title, icon, body, footer, onClose} = this.props;
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
                        {footer}
                    </div>
                </div>
            </Dialog>
        );
    }
}

ConfirmationPopup.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.element,
    body: PropTypes.node,
    footer: PropTypes.node,
    onClose: PropTypes.func
};