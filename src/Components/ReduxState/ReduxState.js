import { createSlice } from '@reduxjs/toolkit'

const initialState = {
current: null,
}

const ReduxState = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state, action) =>{
        // state.current holds the current state. actions.payload changes or updates the state
        state.current = action.payload
    },
    LogoutUser : (state) =>{
        state.current = null;
    }
  }
});

export const {LoginUser, LogoutUser} = ReduxState.actions

export default ReduxState.reducer