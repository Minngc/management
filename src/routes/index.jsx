import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/admin/home";
import UnLoginHome from "../pages/unLogin";
import UnLoginDefault from "../pages/unLogin/default";
import Login from "../pages/unLogin/login";
import SignUp from "../pages/unLogin/signup";
import { AuthProvider } from "./Authprovider";
import { userLogin } from "../apis/global";
import { userRegist } from "../apis/user";
import { RoleLayout } from "./roleguard";

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
            action: loginAction,
          },
          {
            path: "signup",
            element: <SignUp />,
            action: signupAction,
          },
        ],
      },
      {
        element: <RoleLayout />,
        children: [
          {
            path: "/home",
            element: <Home />,
            children: [{
            }],
          },
        ],
      },
    ],
  },
]);

export { route };

/**
 *
 * @param {ActionFuncArgs} param
 * @returns
 */
async function loginAction({ request }) {
  // console.log(request);
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");

  return userLogin(username, password);
}

/**
 *
 * @param {ActionFuncArgs} param
 * @returns
 */
async function signupAction({ request }) {
  // console.log(request);
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  const email = data.get("email");
  return userRegist(username, password, email);
}
