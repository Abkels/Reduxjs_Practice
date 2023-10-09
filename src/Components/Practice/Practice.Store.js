import { configureStore } from "@reduxjs/toolkit";
import myReducer from './PracticeRedux'

export const store = configureStore({
    reducer :{
        myReducer
    },
});