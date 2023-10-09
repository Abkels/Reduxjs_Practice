import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const user = useSelector((state)=> state.myReducer.current)

  return (
    <div>
      <h2>User</h2>
      <div>Username : {user?.userName}</div>
      <div>Age :{user?.Age}</div>
      <div>Email : {user?.Email}</div>
      <div>Stack :{user?.stack}</div>

    </div>
  )
}

export default Profile