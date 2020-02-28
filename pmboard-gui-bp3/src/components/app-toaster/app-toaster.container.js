import {connect} from 'react-redux';
import {hideToast} from "../../actions/app/toaster";
import AppToaster from "./app-toaster";

function mapStateToProps(state) {
    return {
        toasts: state.app.toaster.toasts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDismiss: (id) => dispatch(hideToast(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppToaster);