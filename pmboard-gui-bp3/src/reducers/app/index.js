import {combineReducers} from "redux";
import toaster from "./toaster";

export default function appReducer() {
    return combineReducers({
        toaster: toaster
    })
}