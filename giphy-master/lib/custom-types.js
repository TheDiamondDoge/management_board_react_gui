import PropTypes from 'prop-types';

export const SearchResult = PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    full: PropTypes.string.isRequired,
});
