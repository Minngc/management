import React from "react";
import { Navigate } from "react-router-dom";


const userPage = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    }, {
        path: "/home",
        element: <></>,
    }
]

export default userPage
