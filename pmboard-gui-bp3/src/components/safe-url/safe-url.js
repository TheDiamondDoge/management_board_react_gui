import React from 'react';
import PropTypes from 'prop-types';

export default class SafeUrl extends React.PureComponent {
// ({url, className, label = "Click here"})
    render() {
        const {url, className, label} = this.props;
        if (this.isUrl(url)) {
            return (
                <a href={url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={className}>
                    {label}
                </a>
            )
        } else {
            return label === "Click here" ? url : label;
        }
    }

    isUrl = (value) => {
        const expr = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi;
        const regExp = new RegExp(expr);
        return String(value).match(regExp);
    };
}

SafeUrl.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string
};

SafeUrl.defaultProps = {
    label: "Click here"
};