import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../components/logo";

function Login() {
  return (
    <>
      <Link replace to="/signup" className="btn-toSignUp--small">
        注册账号
      </Link>

      <div className="form-login">
        <Logo />
        <input
          type="text"
          className="input-account"
          placeholder="邮箱或登陆账号"
        />
        <input type="password" className="input-password" placeholder="密码" />
        <button type="submit" className="btn-login">
          登录
        </button>
        <Link replace to="./" className="link-forget">
          忘记密码
        </Link>
        <footer className="footer-welcome">
          <div>Welcome!</div>
        </footer>
      </div>
    </>
  );
}

export default Login;
