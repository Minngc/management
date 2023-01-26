import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const userPage = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <>404</>,
  },
]);

export default userPage;
