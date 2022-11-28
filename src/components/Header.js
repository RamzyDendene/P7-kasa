import React from "react";
import logoH from "../assets/KASA_logo_header.png";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoH} alt="logo Kasa" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
      </nav>
    </header>
  );
}
export default Header;
