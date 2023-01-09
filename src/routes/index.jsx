import { useRoutes } from "react-router-dom";
import userPage from "./user";
import unLoginPage from "./unLogin";
import { useUserState } from "../hooks/useUserProfile";

function Register() {
    const [userState] = useUserState()
    const routerMap = new Map()

    routerMap.set("user", useRoutes(userPage));
    routerMap.set("offline", useRoutes(unLoginPage));
    return routerMap.get(userState);
}

export default Register;