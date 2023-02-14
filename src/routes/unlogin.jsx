import UnLoginHome from "../pages/unLogin";
import UnLoginDefault from "../pages/unLogin/default";
import Login from "../pages/unLogin/login";
import SignUp from "../pages/unLogin/signup";
import { userLogin } from "../apis/global";
import { userRegist } from "../apis/user";

const unLoginRoute = {
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
};

export { unLoginRoute };

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
 * @param {string} param.request
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
