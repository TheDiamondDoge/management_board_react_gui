import { connect } from 'react-redux';
import SearchResults from './search-results';
import {giphyClicked} from "../../actions/giphy-display";

function mapStateToProps (state) {
    return {
        results: state.search.results,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (full) => dispatch(giphyClicked(full)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);