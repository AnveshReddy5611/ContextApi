import React from "react";
import { useContext } from "react";
import { usercontext } from "./App";

function SideNav() {
  const [activeprofiles] = useContext(usercontext);
  return (
    <div>
      <h1>SideNav Data </h1>
      <h3>ActiveProfiles : {activeprofiles}</h3>
    </div>
  );
}

export default SideNav;
