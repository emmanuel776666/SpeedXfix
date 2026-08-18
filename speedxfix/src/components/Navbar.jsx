// this is the code for the Navbar component in a React application. The Navbar includes a logo, a menu button, and links for login and sign-up. The logo is imported from the assets folder, and the component is styled using CSS classes.
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";


function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <button className="menu-button">☰</button>

        <img src={logo} alt="SpeedXFix logo" />
      </div>

      <div className="nav-links">

         {/* <a href="/login">Login</a>| */}

        <Link to="/login">Login</Link>|
        <a href="/signup"><button className="sign-up-button">Sign Up</button></a>
      </div>

    </nav>
  );
}

export default Navbar;