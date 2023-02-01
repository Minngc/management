import { useAuth } from "./Authprovider";
import { Navigate, Outlet } from "react-router-dom";

function RoleLayout() {
  const { user } = useAuth();
  if (!user) {
    // [ ] 提醒先登录的提示
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

function AdminLayout() {
  const { user } = useAuth();
  if (user.role !== 1) {
    // [ ] 权限不足的提示
    return <Navigate to={-1} replace />;
  }
  return <Outlet />;
}

export { RoleLayout, AdminLayout };
