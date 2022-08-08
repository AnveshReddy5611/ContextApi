import React from 'react'
import { useContext } from "react";
import { usercontext } from "./App";

function Profile() {
    const [title, username] = useContext(usercontext);
  return (
    <div> <h1>Profile Data Data</h1>
   
    <h3>UserName : {username}</h3></div>
  )
}

export default Profile