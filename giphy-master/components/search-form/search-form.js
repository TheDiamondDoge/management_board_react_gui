import React from 'react';
import PropTypes from 'prop-types';
import style from './search-form.css';

export default function SearchForm({onSearchSubmitted}) {
    let searchField = null;
    const searchSubmitted = (e) => {
        e.preventDefault();
        onSearchSubmitted(searchField.value);
    };

    return (
        <form className={style.container} onSubmit={searchSubmitted}>
            <input className={style.searchField} ref={(e) => searchField = e} type="text"
                   placeholder="Find me Giphys..."/>
            <input className={style.button} type="submit" value="Search"/>
        </form>
    )
}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
};