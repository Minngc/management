import { useAuth } from "./Authprovider";
import { Navigate, Outlet } from "react-router-dom";

// 用于阻挡未登录用户
function RoleLayout() {
  const { user } = useAuth();
  if (!user) {
    // [ ] 提醒先登录的提示
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

// 用于阻挡无权限用户
function AdminLayout() {
  const { user } = useAuth();
  if (user.role !== 1) {
    // [ ] 权限不足的提示
    return <Navigate to={-1} replace />;
  }
  return <Outlet />;
}

export { RoleLayout, AdminLayout };
