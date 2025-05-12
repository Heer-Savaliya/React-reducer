// Aya jetla pn reducer hoy ane import karvana 

import { combineReducers } from "redux";
import changeNumber from "./upDown";

const rootReducer = combineReducers({
    changeNumber,
});

export default rootReducer;