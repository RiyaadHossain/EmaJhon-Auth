import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  if (error) {
    return;
  }
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit}>
        <h2>Log In</h2>
        <div className="input-group">
          <label htmlFor="">Your Email</label>
          <input onBlur={onEmailBlur} type="email" name="" id="" />
        </div>
        <div className="input-group">
          <label htmlFor="">Your Passowrd</label>
          <input onBlur={onPasswordBlur} type="password" name="" id="" />
        </div>
        <div className="little-msg">
          <Link to={"/signup"}>
            New to Ema Jhon. <span className="color"> Sign Up</span>
          </Link>
        </div>
        {loading && <p>Loading</p>}
        <p style={{ color: "red" }}>{error?.message}</p>
        <input className="submit-btn" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default LogIn;
