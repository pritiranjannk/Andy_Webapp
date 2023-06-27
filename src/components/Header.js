/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import logo from "../img/Logo.png";
import {ReactComponent as Ellipse} from "../svg/ellipse.svg";

const Header = () => {
  return (
    <header class="navbar">
      <div class="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <nav class="nav-menu">
        <ul class="nav-list">
          <li class="nav-item active">
            <a href="/">Home</a>
            <Ellipse />
          </li>
          <li class="nav-item">
            <a href="/">Network</a>
          </li>
          <li class="nav-item">
            <a href="/">Product</a>
          </li>
          <li class="nav-item">
            <a href="/">Technology</a>
          </li>
          <li class="nav-item">
            <a href="/">Our Story</a>
          </li>
          <li class="nav-item">
            <a href="/">Knowledge Center</a>
          </li>
        </ul>
      </nav>
      <div className="design-ellipse"></div>
    </header>
  );
};

export default Header;
