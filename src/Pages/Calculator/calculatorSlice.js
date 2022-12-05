import {createSlice } from "@reduxjs/toolkit";
export const BMISlice = createSlice({
    name : "bmi",
    initialState: {
        BMI : [],
        numbersOfTest : 0
    },
    reducers:{
        BMIRes: (state, action)=>{
            state.numbersOfTest += 1 
            state.BMI.push(action.payload);
        },
    },
});

export const {BMIRes}=BMISlice.actions;
export const selectBmi = (state) => state.bmi;
export default BMISlice.reducer;

//         isLoggedIn: false,
//         token: null
//     },
//     reducers:{
//         login: (state, action)=>{
//             state.isLoggedIn = true
//             state.token = action.payload;
//         },
//         logout:(state)=>{
//             state.isLoggedIn = false
//             state.token = nullimport { combineReducers } from "redux";

// const RootReducer = combineReducers({
//     BMIResults : bmireducer
// });
// export default RootReducer;


// export const {login,logout}=authSlice.actions;
// export const selectAuth = (state) => state.auth;
// export default authSlice.reducer;