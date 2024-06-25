import React, { useState } from "react";
import './index.css';

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="nav">
        <ul style={{ right: menuOpen ? '0' : '-500%' }}>
          <li id="close-menu" onClick={handleMenuToggle}>
            <i className="fa-solid fa-circle-xmark"></i>
          </li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Shipping and pay</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Stores</a></li>
        </ul>
        <li id="open-menu" onClick={handleMenuToggle}>
          <i className="fa-solid fa-bars"></i>
        </li>
      </nav>
    </>
  );
};

export default Navigationbar;
