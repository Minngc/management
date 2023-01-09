import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../components/logo";

function UnLoginDefault() {
  return (
    <>
      <div className="form-default">
        <Logo />
        <Link className="btn-toSignUp" to="./signup">
          注册账户
        </Link>
        <Link className="btn-toLogin" to="./login">
          登录账户
        </Link>
        <div className="container-otherLogin">
          <div>其他方式登录</div>
        </div>
        <footer className="footer-welcome">
          <div>Welcome!</div>
        </footer>
      </div>
    </>
  );
}

export default UnLoginDefault;
