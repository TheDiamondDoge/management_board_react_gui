import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

export default function SearchResults ({ results, onClick }) {
    return (
        <div className={styles.container}>
            { results.map((result) => <SearchResult onClick={onClick} result={result} />) }
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
    onClick: PropTypes.func.isRequired
};