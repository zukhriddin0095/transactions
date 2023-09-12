import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./LoginUI.scss";
import {  useNavigate } from "react-router-dom";

export const LoginUI = () => {
  const [user, setUser] = useState({ Username: "", password: "" });
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault();
    if (user.Username === "zukhriddin" && user.password === "12345") {
      navigate("/Debts"); 
    } else {
      toast.error("Username ni yoki Parol ni hato terdingiz iltimos sal diqqatli boling");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <Fragment>
      <section className="login">
        <div className="login-box">
          <form onSubmit={submit}>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input onChange={handleUser} id="Username" type="text" required />
              <label>User Name</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                onChange={handleUser}
                id="password"
                type="password"
                required
              />
              <label>password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> remember me
              </label>
              <a href="#forget">Forgot password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="#register">Register</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginUI;
