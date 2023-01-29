import React, { useState, useContext } from "react";
import { Link, Form } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { userStateContext } from "../../../context/userProfile";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserState } = useContext(userStateContext);
  const canLogin = username !== "" && password !== "";
  const actionData = useActionData();
  if (actionData&&actionData?.status >= 200 && actionData?.status < 300) {
    const res = actionData.data.data;
    localStorage.setItem("Token", res.token);
    switch (res.role) {
      case 1:
        setUserState("admin");
        localStorage.setItem("userState", "admin");
        break;
      default:
        setUserState("offline");
        localStorage.setItem("userState", "offline");
    }
  }
  return (
    <>
      <Link replace to="/signup" className="btn-toSignUp--small">
        注册账号
      </Link>
      <Form method="post">
        <input
          value={username}
          name="username"
          type="text"
          className="input-account"
          placeholder="邮箱或登陆账号"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          name="password"
          type="password"
          className="input-password"
          placeholder="密码"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!canLogin} type="submit" className="btn-login">
          登录
        </button>
      </Form>
      <Link replace to="." className="link-forget">
        忘记密码
      </Link>
      <footer className="footer-welcome">
        <div>Welcome!</div>
      </footer>
    </>
  );
}

export default Login;
