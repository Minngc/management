import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const canLogin = username !== "" && password !== "";
  const actionData = useActionData()
  console.log(actionData)
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
