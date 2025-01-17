import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Header Logo</div>
        <nav className="nav-links">
          <a href="#link1">header link one</a>
          <a href="#link2">header link two</a>
          <a href="#link3">header link three</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
