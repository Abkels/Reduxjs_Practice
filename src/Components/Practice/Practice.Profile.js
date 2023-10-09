import React from "react";
import { useSelector } from "react-redux";

const Profile = ()=>{
    const user = useSelector()
    return(
        <div>
            <h2>User</h2>
            <div>Name: {user?.name}</div>
            <div>Age: {user?.age}</div>
            <div>stack: {user?.stack}</div>
        </div>
    )
}

export default Profile