import React from 'react';
import * as CustomTypes from '../../lib/custom-types';
import PropTypes from 'prop-types';

export default function SearchResult ({ result, onClick }) {
    const { thumbnail } = result;

    const giphyClick = () => {
        onClick(result.full);
    };

    return (
        <img onClick={ giphyClick } src={thumbnail} alt='Giphy' />
    );
}

SearchResult.propTypes = {
    result: CustomTypes.SearchResult.isRequired,
    onClick: PropTypes.func.isRequired,
};