import { apis } from ".";
import qs from "qs";

/**
 * 用户登录
 * @param {string} username
 * @param {string} password
 * @returns
 */
const userLogin = (username, password) => {
  return apis.post(
    "/login",
    qs.stringify({ userName: username, password: password })
  );
};

export { userLogin };
