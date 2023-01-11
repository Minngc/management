import { useRoutes } from "react-router-dom";
import userPage from "./user";
import unLoginPage from "./unLogin";
import { useUserState } from "../hooks/useUserProfile";

function Register() {
    const [userState] = useUserState()
    const routerMap = new Map()
    const user =  useRoutes(userPage)
    const unLogin = useRoutes(unLoginPage)
    routerMap.set("user", user);
    routerMap.set("offline",unLogin);
    return routerMap.get(userState);
}

export default Register;