import React from 'react';
import PropTypes from 'prop-types';
import styles from "./tooltip-content.module.scss";

export default class TooltipContent extends React.PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <div className={styles.tooltip_style}>
                <h4>{title}</h4>
                <p dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        )
    }
};

TooltipContent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

TooltipContent.defaultProps = {
    title: '',
    content: '',
};