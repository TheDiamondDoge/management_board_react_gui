import React from 'react';
import PropTypes from 'prop-types';

export default class SafeUrl extends React.PureComponent {
    render() {
        const {url, className, label, ...others} = this.props;
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...others}
            >
                {label}
            </a>
        )
    }
}

SafeUrl.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string
};

SafeUrl.defaultProps = {
    label: "Click here",
    className: ''
};