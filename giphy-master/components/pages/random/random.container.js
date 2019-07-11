import { connect } from 'react-redux';
import Random from './random';
import {getRandomGiphy} from "../../../actions/random";
import {giphyClicked} from "../../../actions/giphy-display";

function mapStateToProps(state) {
    return {
        giphy: state.random.giphy,
        isLoading: state.random.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(getRandomGiphy()),
        onGiphyClick: (link) => dispatch(giphyClicked(link)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);