import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <div className="header">
      App. add new item, remove, add completed.
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
