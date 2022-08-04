import React from 'react';
import {useContext} from "react"
import {usercontext} from "./App.js"
import Main from './Main.js';
import SideNav from './SideNav.js';

function Dashboard() {
    const [title,username,activeprofiles]=useContext(usercontext)
  return (
    <div>
    
    <h1>Dashboard Data</h1>
    <h3>Title : {title}</h3>
      <h3>UserName : {username}</h3>
      <h3>ActiveProfiles : {activeprofiles}</h3>
      <SideNav/>
      <Main/>
    
    
    </div>
  )
}

export default Dashboard