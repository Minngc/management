import React from "react";
import UnLoginHome from "../pages/unLogin";
import Login from "../pages/unLogin/login";
import SignUp from "../pages/unLogin/signup";


const unLoginPage = [
  {
    path: "/",
    element: <UnLoginHome />,
    children: [
      {
        path: "login",
        element: <Login />,
      }, {
        path: "signup",
        element: <SignUp />,
      }
    ]
  }
]

export default unLoginPage