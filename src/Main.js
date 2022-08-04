import React from "react";
import { useContext } from "react";
import { usercontext } from "./App";
import Page from "./Page";
import TopNav from "./TopNav";

function Main() {
  const [title, username] = useContext(usercontext);
  return (
    <div>
      <h1>Main Data</h1>
      <h3>Title : {title}</h3>
      <h3>UserName : {username}</h3>
      <TopNav />
      <Page/>
    </div>
  );
}

export default Main;
