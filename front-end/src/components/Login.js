import React from "react";
import "../style.css";

const Login = () => {
  return (
    <div className="login">
      <div className="header">Login</div>
      <div className="form">
        <input type="text" name="name" placeholder="enter your name" />
        <input type="email" name="email" placeholder="enter your email" />
        <input type="password" name="password" placeholder="enter passowrd" />
        <input type="password" name="c_password" placeholder="confirm password" />
        <button type="submit">Sign-In</button>
      </div>
    </div>
  );
};

export default Login;
