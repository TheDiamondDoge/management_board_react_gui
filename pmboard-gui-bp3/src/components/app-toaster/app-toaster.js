import React from "react";
import {Toast, Toaster} from "@blueprintjs/core";
import PropTypes from "prop-types";

//TODO maxToasts = 3 -> no effect at all (fix this)
export default function AppToaster({toasts, onDismiss}) {
    const maxToasts = 3;
    const fadeTimeout = 5000;
    return (
        <Toaster maxToasts={maxToasts}>
            {toasts.map(toast => (
                !toast.hidden && (
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        timeout={fadeTimeout}
                        intent={toast.intent}
                        onDismiss={() => {
                            onDismiss(toast.id)
                        }}
                    />
                )
            ))}
        </Toaster>
    )
}

AppToaster.propTypes = {
    toasts: PropTypes.arrayOf(
        PropTypes.shape({
            hidden: PropTypes.bool,
            id: PropTypes.oneOfType(
                [PropTypes.string, PropTypes.number]
            ).isRequired,
            intent: PropTypes.string,
            message: PropTypes.string.isRequired,
        })
    ).isRequired,
};