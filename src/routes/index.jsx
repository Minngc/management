import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/admin/home";
import UnLoginHome from "../pages/unLogin";
import UnLoginDefault from "../pages/unLogin/default";
import Login from "../pages/unLogin/login";
import SignUp from "../pages/unLogin/signup";
import { AuthProvider } from "./Authprovider";
const route = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
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
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/home",
        element: <Home />,
        children: [{}],
      },
    ],
  },
]);

export { route };
