import React from "react";
import "./style.css";
function Header() {
  return (
    <header className="header">
      <img src="./assets/logo.png" className="logo"/>
      <h2 className="subtitle">Software Engineer · Web App Developer</h2>
      <div className="svg-hero">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="svg-wave"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="path"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
