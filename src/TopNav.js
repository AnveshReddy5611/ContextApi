import React from "react";
import { useContext } from "react";
import { usercontext } from "./App.js";

function TopNav() {
  const [title, username] = useContext(usercontext);
  return (
    <div>
      {" "}
      <h1>Dashboard Data</h1>
      <h3>Title : {title}</h3>
    </div>
  );
}

export default TopNav;
