import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const  NavBar= () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" onClick={closeMenu}>
         <div className="logo">D&L<span>Fashion</span></div>
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : <ReorderIcon style={{ fontSize: "32px" }} />}
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/home" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>ContactUS</Link>
        <Link to="/category" onClick={closeMenu}>Category</Link>
        <Link to="/login-page" onClick={closeMenu}>Login</Link>
         <Link to="/cart" onClick={closeMenu}>Cart</Link>
      </div>
    </nav>
  );
}
export default NavBar;