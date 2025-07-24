import React from "react";
import "./Header.css";  

const Header: React.FC = () => {
  return (
    <header className="header">
      <button
        onClick={() => window.location.href = "/"}
        className="buttonTitle"
      >
        Delivery Party
      </button>
    </header>
  );
};

export default Header;
