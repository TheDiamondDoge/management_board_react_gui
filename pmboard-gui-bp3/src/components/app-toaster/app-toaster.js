import React from "react";
import {Toast, Toaster} from "@blueprintjs/core";
import PropTypes from "prop-types";

//TODO maxToasts = 3 -> no effect at all (fix this)
export default class AppToaster extends React.Component {
    render() {
        const {toasts, onDismiss} = this.props;
        return (
            <Toaster maxToasts={3}>
                {toasts.map(toast => (
                    !toast.hidden &&
                    <Toast
                        key={toast.id}
                        message={toast.message}
                        timeout={5000}
                        intent={toast.intent}
                        onDismiss={() => {
                            onDismiss(toast.id)
                        }}
                    />
                ))}
            </Toaster>
        )
    }
}

AppToaster.propTypes = {
    toasts: PropTypes.arrayOf(
        PropTypes.shape({
            hidden: PropTypes.bool,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            intent: PropTypes.string,
            message: PropTypes.string,
        })).isRequired,
};