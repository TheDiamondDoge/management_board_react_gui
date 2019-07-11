import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';
import Search from "../search/search";

export default class Trending extends React.Component {
    render() {
        const { onInfiniteScroll, isSearchLoading, isActive } = this.props;
        return (
            <div>
                <InfiniteScroll isActive={isActive} isLoading={isSearchLoading} onTrigger={() => onInfiniteScroll()}>
                    <SearchResults/>
                </InfiniteScroll>
            </div>
        )
    }

    componentDidMount() {
        this.props.onSearchSubmitted();
    }
}

Trending.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isSearchLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
};