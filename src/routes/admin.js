import Home from "../pages/admin";
import { Navigate, createBrowserRouter } from "react-router-dom";

const adminPage = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <Home />,

    children: [{}],
  },
]);

export default adminPage;
