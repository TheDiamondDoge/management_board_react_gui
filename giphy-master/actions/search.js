export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const NEW_SEARCH = 'NEW_SEARCH';
export const RANDOM_SEARCH = 'RANDOM_SEARCH';

export const searchError = () => ({ type: SEARCH_ERROR });
export const newSearch = (searchTerm) => ({
    type: NEW_SEARCH,
    searchTerm,
});
export const searchSuccess = (results) => ({
    type: SEARCH_SUCCESS,
    results,
});
export const performSearch = () => ({
    type: PERFORM_SEARCH,
});