// this is the code for the Navbar component in a React application. The Navbar includes a logo, a menu button, and links for login and sign-up. The logo is imported from the assets folder, and the component is styled using CSS classes.
import { Link } from "react-router-dom";
import LogoComponent from "./LogoComponent";


function Navbar() {
  return (
    <nav className="navbar">

      <LogoComponent />
        <div className="nav-links">
        <Link to="/login">Login</Link>|
        <Link to="/signup"><button className="sign-up-button">Sign Up</button></Link>
      </div>

    </nav>
  );
}

export default Navbar;