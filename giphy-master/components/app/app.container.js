import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import App from './App';
import {clickedAway} from "../../actions/giphy-display";

function mapStateToProps(state) {
    return {
        isShown: state.giphyDisplay.isShown,
        link: state.giphyDisplay.link,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickedAway: () => dispatch(clickedAway())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));