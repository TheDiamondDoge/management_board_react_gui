import {connect} from 'react-redux';
import App from "./App";

function mapStateToProps(state) {
    return {
        appSettings: state.app.appSettings,
    }
}

export default connect(mapStateToProps, ()=>({}))(App);