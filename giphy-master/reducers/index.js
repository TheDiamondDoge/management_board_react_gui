import { combineReducers } from 'redux';
import searchReducer from './search';
import giphyDisplayReducer from './giphy-display';
import randomReducer from './random';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    router: routerReducer,
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
    random: randomReducer
});
