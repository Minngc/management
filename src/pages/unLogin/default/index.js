import React from "react";
import { Link } from "react-router-dom";

function UnLoginDefault() {
  return (
    <>
      <Link className="link-toSignUp" to="./signup">
        注册账户
      </Link>
      <Link className="link-toLogin" to="./login">
        登录账户
      </Link>
      <div className="container-otherLogin">
        <div>其他方式登录</div>
      </div>
      <footer className="footer-welcome">
        <div>Welcome!</div>
      </footer>
    </>
  );
}

export default UnLoginDefault;
