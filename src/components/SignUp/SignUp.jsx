import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-controller">
      <h3 className="form-title">Sign Up</h3>
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
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          placeholder="Your password"
          required
        />
      </div>
      <div className="form-control">
        <button className="btn-submit">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
