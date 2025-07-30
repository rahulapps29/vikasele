import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="logo">⚡ Vikas Electricals</div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
          onClick={closeMenu}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
