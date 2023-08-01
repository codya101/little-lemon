import './Footer.css';

function Footer() {
    return (
      <footer>
        <img src="footerLogo.png"></img>
        <nav>
          <ul>
            <h1>Navigation</h1>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderOnline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h1>Contact</h1>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h1>Social Media</h1>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </nav>
      </footer>
    );
}
export default Footer;