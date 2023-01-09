import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/logo";

function SignUp() {
  return (
    <>
      <Link replace to="/login" className="btn-toLogin--small">
        登录
      </Link>
      <div className="form-signUp">
        <Logo />
        <input type="text" placeholder="请输入账号" />
        <input type="email" placeholder="请输入邮箱" />
        <input type="password" placeholder="请输入密码" />
        <input type="password" placeholder="请请确认密码" />
        <button type="submit">注册</button>
        <footer className="footer-welcome">
          <div>Join us!</div>
        </footer>
      </div>
    </>
  );
}

export default SignUp;
