import { apis } from ".";

/**
 * 用户注册
 * @param {string} username 用户名
 * @param {string} password 密码
 * @param {string} email 邮箱
 * @returns
 */
const userRegist = function (username, password, email) {
  const formdate = new FormData();
  formdate.append("userName", username);
  formdate.append("password", password);
  if (email !== "") {
    formdate.append(email);
  }
  return apis.post("/user/register", formdate);
};

const getInfo = () => {
  return apis.get("/user/info");
};

const editInfo = (username, password, email) => {
  const formData = new FormData();
  formData.append("userName", username);
  formData.append("pasword", password);
  formData.append("email", email);
  return apis.post("/user/edit_info", formData);
};

export { userRegist, getInfo, editInfo };
