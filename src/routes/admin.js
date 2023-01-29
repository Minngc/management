import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/admin/home";
import Admin from "../pages/admin";
import { getInfo } from "../apis/user";

const adminPage = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
    loader: async () => {
      return getInfo();
    },
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "login",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,

        children: [{}],
      },
    ],
  },
]);

export default adminPage;
