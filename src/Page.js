import React from "react";
import { useContext } from "react";
import { usercontext } from "./App";
import Profile from "./Profile";

function Page() {
  const [title, username] = useContext(usercontext);
  return (
    <div>
      <h1>Page Data</h1>

      <h3>UserName : {username}</h3>
      <Profile/>
    </div>
  );
}

export default Page;
