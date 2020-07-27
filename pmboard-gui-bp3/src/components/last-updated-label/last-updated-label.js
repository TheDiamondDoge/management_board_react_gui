import React from 'react';
import PropTypes from 'prop-types';
import SafeUrl from "../safe-url/safe-url";

function LastUpdatedLabel({onClick, isFileExists, label, ...others}) {
    const fileDownloadLabel = "Get last uploaded file";
    return (
        isFileExists
            ? (
                <SafeUrl
                    label={label}
                    onClick={onClick}
                    title={fileDownloadLabel}
                    {...others}
                />
            )
            : (label)
    )
}

LastUpdatedLabel.propTypes = {
    onClick: PropTypes.func,
    isFileExists: PropTypes.bool.isRequired,
    label: PropTypes.string,
};

LastUpdatedLabel.defaultProps = {
    onClick: () => {
    },
    label: ''
};

export default React.memo(LastUpdatedLabel);