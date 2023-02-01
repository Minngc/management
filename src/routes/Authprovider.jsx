import { createContext, useMemo, useCallback, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

// [ ] 移出到储存 context 的文件中
const AuthContext = createContext();

/**
 * 该组件用户提供用户信息
 * @returns
 */
function AuthProvider() {
  // setter 在设置时会一并存储 localStorage
  const [user, setUser] = useLocalStorage("profile", "");
  const [, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const login = useCallback(
    /**
     * 用于登录时存储数据
     * @param {{user:{username:string,email:string,role:number},token:string}} data
     * @returns
     */
    async (data) => {
      console.log("in")
      setUser(data.user);
      console.log(data.user);
      setToken(data.token);
      navigate("/home", { replace: true });
    },
    [navigate, setUser, setToken]
  );

  /**
   * 用于注销时清空数据
   * @returns
   */
  const logout = useCallback(async () => {
    console.log("out")
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  }, [navigate, setUser, setToken]);

  const value = useMemo(() => {
    return { user, login, logout };
  }, [user, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
}

// [ ] 移动到 hooks 文件夹中
/**
 * 封装 useContext， 用于暴露 用户状态信息 与 登录/注销的方法
 * @returns
 */
function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
