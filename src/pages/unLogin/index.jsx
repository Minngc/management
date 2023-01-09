import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import UnLoginDefault from "./default";
import Slide from "./slide";

import "./index.scss"

function UnLoginHome() {
    const {pathname} =  useLocation()
    return (<>
        <Slide/>
        {pathname === "/" ? <UnLoginDefault/> : <Outlet />}
    </>)
}

export default UnLoginHome;
