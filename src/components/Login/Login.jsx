import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const signedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-controller">
      <h3 className="form-title">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Your password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>{show ? <span>Hide</span> : <span>Show</span>}</small>
          </p>
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
