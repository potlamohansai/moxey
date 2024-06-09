import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar bg-body-tertiary">
        <div className="container-flex">
          <span className="navbar-brand mb-0 h1">
            Rudra Transporter - Transporter
          </span>
        </div>
        <div className="container-flex">
          <span className="nav-item mb-0 h6">01/05/2024 - 30/05/2024</span>
          <span className="nav-item mb-0 h6"> United States</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
