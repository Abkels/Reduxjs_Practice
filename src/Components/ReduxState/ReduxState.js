import { createSlice } from '@reduxjs/toolkit'

const initialState = {
current: null,
}

const ReduxState = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state, actions) =>{
        // state.current holds the current state. actions.payload changes or updates the state
        state.current = actions.payload
    },
    logoutUser : (state) =>{
        state.current = null;
    }
  }
});

export const {LoginUser, logoutUser} = ReduxState.actions

export default ReduxState.reducer