import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Navigation from './navigation';

const pages = [
    { path: '/', title: 'Search'},
    { path: '/trending', title: 'Trending'},
    { path: '/random', title: 'Random'}
];

function mapStateToProps(state) {
    return {
        pages,
        currentPath: state.router.location.pathname,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: (path) => dispatch(push(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);