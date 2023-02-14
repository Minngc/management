import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/admin/home";
import { AuthProvider } from "./Authprovider";
import { RoleLayout } from "./roleguard";
import { unLoginRoute } from "./unlogin";

const route = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      unLoginRoute,
      {
        element: <RoleLayout />,
        children: [
          {
            path: "/home",
            element: <Home />,
            children: [{}],
          },
        ],
      },
    ],
  },
]);

export { route };
