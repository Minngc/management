import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UnLoginHome from "../pages/unLogin";
import Login from "../pages/unLogin/login";
import SignUp from "../pages/unLogin/signup";
import UnLoginDefault from "../pages/unLogin/default";

import { userLogin } from "../apis/global";
import { userRegist } from "../apis/user";

const unLoginPage = createBrowserRouter([
  {
    path: "/",
    element: <UnLoginHome />,
    children: [
      {
        index: true,
        element: <UnLoginDefault />,
      },
      {
        path: "login",
        element: <Login />,
        action: async ({ request }) => {
          console.log(request);
          const data = await request.formData();
          const username = data.get("username");
          const password = data.get("password");
          return userLogin(username, password);
        },
      },
      {
        path: "signup",
        element: <SignUp />,
        action: async ({ request }) => {
          const error = {};
          console.log(request);
          const data = await request.formData();
          const username = data.get("username");
          const password = data.get("password");
          const passwordconfirm = data.get("passwordconfirm");
          const email = data.get("email");
          // 判断
          return [error, userRegist(username, password, email)];
        },
      },
      {
        path: "*",
        element: <>404</>,
      },
    ],
  },
  {
    path: "*",
    element: <>404</>,
  },
]);

export default unLoginPage;
