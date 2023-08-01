import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header>
        <img src="navLogo.svg"></img>
        <nav>
          <ul className="nav-menu">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderOnline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;