import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProviders/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
      {user && <span className="welcome">Welcome {user.name}</span>}
    </nav>
  );
};

export default Header;
