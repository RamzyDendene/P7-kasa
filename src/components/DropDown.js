import chevron from "../assets/chevron-up-solid.svg";
import { useState } from "react";

function DropDown({ title, className, display }) {
  /*
la props title permet d'afficher le titre de l'annonce
className va permettre d'ajuster le css du dropDown
display va servir à afficher un contenu specifique dans le dropdown
*/
  const [isDropped, setIsDropped] = useState(false);

  return isDropped ? (
    <div className={className}>
      <div className="title" onClick={() => setIsDropped(false)}>
        <h2>{title}</h2>
        <img src={chevron} alt="chevron" />
      </div>
      {display}
    </div>
  ) : (
    <div className="undropped" onClick={() => setIsDropped(true)}>
      {" "}
      <h2>{title}</h2>
      <img src={chevron} alt="chevron" />
    </div>
  );
}
export default DropDown;
