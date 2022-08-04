import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react'
import Dashboard from './Dashboard';
export const usercontext=createContext("")
function App() {
  const[title]=useState("TechAssign")
  const[username]=useState("Anvesh Reddy")
  const[activeprofiles]=useState("1")
  return (
    <div className="App">
      <usercontext.Provider value={[title,username,activeprofiles]}>
      <h1>App Data</h1>
      <h3>Title : {title}</h3>
      <h3>UserName : {username}</h3>
      <h3>ActiveProfiles : {activeprofiles}</h3>
      <Dashboard/></usercontext.Provider>
    </div>
  );
}

export default App;
