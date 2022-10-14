import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";

function Header() {
  const { theme, setTheme } = useMainContext();

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={`nav-link ${window.location.pathname === "/" ? "active" : ""}`}
              to="/">
              Home
            </Link>
            <Link
              className={`nav-link ${window.location.pathname === "/about" ? "active" : ""}`}
              to="/about">
              About
            </Link>
            <Link
              className={`nav-link ${window.location.pathname === "/contact" ? "active" : ""}`}
              to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <button
            className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'}`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <i className={`bi bi-${theme === 'light' ? 'moon' : 'sun'}`}></i>
          </button>
        </div>
      </div>
    </nav >
  );
}

export default Header;