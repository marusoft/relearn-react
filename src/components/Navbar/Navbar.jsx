import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <h2>Marusoft</h2>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Product</li>
          <li className="nav-item">Contact Us</li>
        </ul>
        <FaBars className="bars" />
      </div>
    </div>
  );
};
export default Navbar;
