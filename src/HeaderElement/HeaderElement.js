import React from 'react';
import "./HeaderElement.css";
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">{<img className="logo-img" src = "navLogo.svg" alt = "Little Lemon logo" />}</NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar