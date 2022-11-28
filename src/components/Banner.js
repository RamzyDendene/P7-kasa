import React from "react";
import "../styles/banner.css";

function Banner({ imgsrc }) {
  /*
  la props {imgsrc} va permettre d'inserer une image de manière dynamique sur les pages  
  */
  return (
    <div className="banner">
      <img src={imgsrc} alt="Paysage montagneux" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}
export default Banner;
