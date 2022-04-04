import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        State Management
      </Link>
      <div className="right menu">
        <Link to="/local-state" className="item">
          Local State
        </Link>
        <Link to="/props-drilling" className="item">
          Prop Drilling
        </Link>
        <Link to="/recoil" className="item">
          Recoil
        </Link>
        <Link to="/recoil-optimization" className="item">
          Recoil Optimization
        </Link>
      </div>
    </div>
  );
};

export default Header;
