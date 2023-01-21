import { apis } from ".";

/**
 * 删除用户
 * @param {string} username
 * @returns
 */
const deleteUser = (username) => {
  const formData = new FormData();
  formData.append("userName", username);
  return apis.post("/admin/del_user", formData);
};

/**
 * 获取用户列表
 * @param {string} username
 * @returns
 */
const getUserListInfo = (username) => {
  return apis.get("/admin/find_user_info", {
    params: {
      userName: username,
    },
  });
};

export { deleteUser, getUserListInfo };
