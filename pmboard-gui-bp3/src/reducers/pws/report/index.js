import {combineReducers} from "redux";
import images from "./images";
import snapshots from "./snapshots";
import reportTab from "./report-tab";

export default function report() {
    return combineReducers({
        images: images,
        tab: reportTab,
        snapshots: snapshots
    });
}