import React from 'react';
import SearchForm from './search-form/search-form';
import SearchResults from './search-results/search-results.container';

export default () => (
    <div>
        <SearchForm onSearchSubmitted={(term) => console.log(term)} />
        <SearchResults />
    </div>
);