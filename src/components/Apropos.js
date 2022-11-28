import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import DropDown from "./DropDown.js";
import Banner from "./Banner";
import "../styles/apropos.css";
import "../styles/dropDown.css";
import AproposImageBanner from "../assets/Paysage_A_propos.png";
function Apropos() {
  const text = (
    <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
      comportement discriminatoire ou de perturbation du voisinage entraînera
      une exclusion de notre plateforme.
    </p>
  );
  return (
    <div>
      <Header />
      <Banner imgsrc={AproposImageBanner} />
      <div className="main">
        <DropDown title="Fiabilité" className="dropdownLarge" />

        <DropDown className="dropdownLarge" title="Respect" display={text} />

        <DropDown className="dropdownLarge" title="Service"  />

        <DropDown className="dropdownLarge" title="Résponsabilité"  />
      </div>
      <Footer />
    </div>
  );
}
export default Apropos;
