import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from '../navigation-item/navigation-item';
import styles from './navigation.css'

export default function Navigation({ navigate, pages, currentPath }) {
    const items = pages.map(
        ({title, path}) =>
            <NavigationItem
                key={path}
                path={path}
                onClick={navigate}
                isCurrent={path === currentPath}
            >
                {title}
            </NavigationItem>
    );
    return (
        <div className={styles.container}>
            { items }
        </div>
    );
}

Navigation.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    navigate: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired
};