import { createContext, useMemo, useCallback, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

// [ ] 移出到储存 context 的文件中
const AuthContext = createContext();

/**
 * 该组件用户提供用户信息
 * @param {*} param
 * @returns
 */
function AuthProvider() {
  const [user, setUser] = useLocalStorage("profile", "");
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const login = useCallback(
    async (data) => {
      setUser(data.user);
      setToken(data.Token);
      navigate("/home", { replace: true });
    },
    [navigate, setUser, setToken]
  );

  const logout = useCallback(async () => {
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  }, [navigate, setUser, setToken]);

  const value = useMemo(() => {
    return { user, token, login, logout };
  }, [token, user, login, logout]);

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
