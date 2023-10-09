import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../ReduxState/ReduxState'
import { loginUser,logOutUser } from './PracticeRedux'

const PractiseLogin = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
      onClick={()=>{
        dispatch ({
          name: 'abkel',
          age: 10,
          stack: 'figma'
        })
      }}
      >login</button>

      <button
      onClick={()=>{
        dispatch(logoutUser())
      }}
      >logout</button>
    </div>
  )
}

export default PractiseLogin