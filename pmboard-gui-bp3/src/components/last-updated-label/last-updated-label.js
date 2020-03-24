import React from 'react';
import PropTypes from 'prop-types';
import SafeUrl from "../safe-url/safe-url";

export default class LastUpdatedLabel extends React.Component {
    render() {
        const {onClick, isFileExists, label, ...others} = this.props;
        return (
            isFileExists ? (
                <SafeUrl label={label}
                         onClick={onClick}
                         title={"Get last uploaded file"}
                         {...others}
                />
            ) : (label)
        )
    }
}

LastUpdatedLabel.propTypes = {
    onClick: PropTypes.func,
    isFileExists: PropTypes.bool.isRequired,
    label: PropTypes.string,
};