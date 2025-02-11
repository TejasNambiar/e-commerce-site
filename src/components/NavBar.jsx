import { Link } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}