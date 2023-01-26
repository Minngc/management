import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Slide from "./slide";

import "./index.scss";
import Logo from "../../components/logo";

function UnLoginHome() {
  const { pathname } = useLocation();
  return (
    <>
      <Slide />
      <div
        style={{ height: pathname === "/signup" ? "438px" : "357px" }}
        className="container-unLoginForm"
      >
        <Logo />
        {/* {pathname === "/" ? <UnLoginDefault /> : */}
         <Outlet />
         {/* } */}
      </div>
    </>
  );
}

export default UnLoginHome;
