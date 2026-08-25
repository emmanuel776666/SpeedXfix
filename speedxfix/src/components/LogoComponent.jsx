import logo from "../assets/logo.webp";
function LogoComponent() {
  return (
    <div className="nav-left">
        <button className="menu-button">☰</button>

        <img src={logo} alt="SpeedXFix logo" />
      </div>
  );
}

export default LogoComponent;