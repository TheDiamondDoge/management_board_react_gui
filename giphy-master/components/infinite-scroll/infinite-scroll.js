import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

export default class InfiniteScroll extends React.Component {
    constructor (...args) {
        super(...args);
        this.container = null;
        this.scrollListener = this.scrollListener.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener () {
        const { isLoading, onTrigger, isActive } = this.props;
        const viewportHeight = document.documentElement.clientHeight;
        const { bottom } = this.container.getBoundingClientRect();
        if (isActive && !isLoading && (bottom <= viewportHeight)) {
            onTrigger();
        }
    }

    render() {
        const { children, isLoading } = this.props;
        return (
            <div ref={(e) => this.container = e}>
                {children}
                { isLoading && <Spinner /> }
            </div>
        )
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
};
