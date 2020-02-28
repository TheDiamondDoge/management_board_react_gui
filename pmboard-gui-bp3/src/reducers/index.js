import {combineReducers} from 'redux';
import pwsReducers from "./pws";
import appReducer from "./app";

export default combineReducers({
    app: appReducer(),
    pws: pwsReducers(),
});