import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const canSignUp =
    userName !== "" &&
    password !== "" &&
    password === confirmPass &&
    (email === "" ||
      /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/.test(
        email
      ));

  return (
    <>
      <Link replace to="/login" className="btn-toLogin--small">
        登录
      </Link>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          value={userName}
          type="text"
          placeholder="请输入账号"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="请输入邮箱"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          className="animation-enlarge"
          placeholder="请输入密码"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPass}
          type="password"
          className="animation-enlarge"
          placeholder="请请确认密码"
          onChange={(e) => setconfirmPass(e.target.value)}
        />
        <button disabled={!canSignUp} type="submit">
          注册
        </button>
      </form>
      <footer className="footer-welcome">
        <div>Join us!</div>
      </footer>
    </>
  );
}

export default SignUp;
