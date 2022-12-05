import { combineReducers } from "redux";
import  bmiReducer  from "../Pages/Calculator/calculatorSlice";


const RootReducer = combineReducers({
    bmires : bmiReducer
});
export default RootReducer;

