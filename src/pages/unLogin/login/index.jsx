import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const canLogin = username !== "" && password !== "";
  return (
    <>
      <Link replace to="/signup" className="btn-toSignUp--small">
        注册账号
      </Link>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
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
      </form>
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
