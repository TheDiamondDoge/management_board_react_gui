import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './giphy-display.css';

export default function GiphyDisplay({ isShown, full, onClick }) {
    const containerClassnames = classNames(
        styles.container,
        {
            [styles.isShown]: isShown,
        }
    );
    return (
        <div className={containerClassnames} onClick={onClick}>
            <img className={styles.image} src={full} alt="Giphy" />
        </div>
    );
}

GiphyDisplay.propTypes = {
    isShown: PropTypes.bool.isRequired,
    full: PropTypes.string,
    onClick: PropTypes.func.isRequired
};