import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
} 

const ReduxState = createSlice({
  name: 'user',
  initialState,
  reducers : {
    loginUser: (state, actions)=>{
      state.current = actions.payload
    },
    logOutUser : (state)=>{
      state.current = null
    },
  },
});

export const {loginUser,logOutUser} = ReduxState.actions
export default ReduxState.reducer
