import changeTheNumber from "./upDown";
import multiDiv from "./mulDiv";
import { combineReducers } from "redux"; 

const rootReducer = combineReducers({
    changeTheNumber,multiDiv
})

export default rootReducer