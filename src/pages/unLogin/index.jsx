import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Slide from "./slide";
import { useAuth } from "../../routes/Authprovider";

import "./index.scss";
import Logo from "../../components/logo";

function UnLoginHome() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  if (user) {
    return <Navigate to="/home" replace />;
  }
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
