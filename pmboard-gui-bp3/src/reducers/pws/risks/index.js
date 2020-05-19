import {combineReducers} from "redux";
import risksRelated from "./risks-related";
import risksSummary from "./risks-summary";
import risksTab from "./risks-tab";

export default function risksReducer() {
    return combineReducers({
        related: risksRelated,
        summary: risksSummary,
        tab: risksTab
    });
}