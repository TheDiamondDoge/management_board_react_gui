import {combineReducers} from "redux";
import toaster from "./toaster";
import appSettings from "./app-settings";

export default function appReducer() {
    return combineReducers({
        appSettings: appSettings,
        toaster: toaster
    })
}