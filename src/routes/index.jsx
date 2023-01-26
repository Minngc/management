import userPage from "./user";
import unLoginPage from "./unLogin";
import adminPage from "./admin";

const routerMap = new Map();
routerMap.set("user", userPage);
routerMap.set("offline", unLoginPage);
routerMap.set("admin", adminPage);

function Register(userState) {
  return routerMap.get(userState);
}

export default Register;
