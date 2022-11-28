import { useState } from "react";
import chevron from "../assets/chevron-up-solid.svg";
function Caroussel({ pictures }) {
  // la props {pictures} permet de recuperer les photos du carousel de manière dynamique

  const [indexPhoto, SetIndexPhoto] = useState(0);
  function reculer() {
    const isFirstPhoto = indexPhoto === 0;
    const newIndex = isFirstPhoto ? pictures.length - 1 : indexPhoto - 1;
    SetIndexPhoto(newIndex);
  }
  function avancer() {
    const isLastSlide = indexPhoto === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : indexPhoto + 1;
    SetIndexPhoto(newIndex);
  }
  return pictures.length === 1 ? <div className="carousel">
  <img src={pictures[indexPhoto]} alt="photo_appartement" />
  <div className="indexPhoto">
    {indexPhoto + 1}/{pictures.length}
  </div></div> :
    <div className="carousel">
      <img src={pictures[indexPhoto]} alt="photo_appartement" />
      <div className="indexPhoto">
        {indexPhoto + 1}/{pictures.length}
      </div>
      <div className="flecheCarousel Droite" onClick={avancer}>
        <img src={chevron} alt="chevron" />
      </div>
      <div className="flecheCarousel Gauche" onClick={reculer}>
        <img src={chevron} alt="chevron" />
      </div>
    </div>
  ;
}
export default Caroussel;
