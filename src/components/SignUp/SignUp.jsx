import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError("Password does not matched!!!");
    } else if (password.length < 7) {
      setError("Your Password smaller than 6 digits");
    }
  };
  return (
    <div className="form-controller">
      <h3 className="form-title">Sign Up</h3>
      <form onSubmit={handleSignUp}>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Your password"
            required
          />
        </div>
        <p>{error}</p>
        <div className="form-control">
          <button className="btn-submit">Sign Up</button>
        </div>
      </form>
      <p className="form-title">
        <small>
          Already Have An Account? <Link to="/login">Login</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default SignUp;
