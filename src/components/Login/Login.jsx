import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-controller">
      <h3 className="form-title">Login</h3>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
        </div>
        <div className="form-control">
          <button className="btn-submit">Login</button>
        </div>
      </form>
      <p className="form-title">
        <small>
          New to Ema-John? <Link to="/signup">Create New Account</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default Login;
