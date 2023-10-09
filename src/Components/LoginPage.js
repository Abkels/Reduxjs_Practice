import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginUser , logoutUser} from './ReduxState/ReduxState'

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>{
        dispatch(
          LoginUser({
            userName: "favour",
            Age: 10,
            Email: "favour@gmail.com",
            stack: "fullstack"
          }),
        );
      }}>Login</button>

      <button onClick={()=>{
        dispatch(logoutUser())
      }}>
        Logout</button>
    </div>
  )
}

export default LoginPage