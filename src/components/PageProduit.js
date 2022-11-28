import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Ratings from "./Ratings";
import { annList } from "../datas/annoncesList";
import { useParams } from "react-router-dom";
import DropDown from "./DropDown";
import "../styles/pageproduit.css";
import Caroussel from "./Carousel";
import ErrorPage from "./ErrorPage";

function PageProduit() {
  let params = useParams(); 
  let idLoge = params.id;
  // const regex = /%/ig;
  // console.log(idLoge.replaceAll(regex, 'error'));

  
  let logementEnCours = annList.find((e) => e.id === idLoge);

  if (logementEnCours === undefined) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  } else {
    const text = <p>{logementEnCours.description}</p>;
    const list = (
      <ul>
        {logementEnCours.equipments.map((tabs, index) => (
          <li key={index}>{tabs}</li>
        ))}
      </ul>
    );

    return (
      <div>
        <Header />
        <Caroussel pictures={logementEnCours.pictures} />
        <div className="infos">
          <div className="infosLogement">
            <h1>{logementEnCours.title} </h1>
            <h2>{logementEnCours.location.split("-").reverse().join(" - ")}</h2>
            <ul>
              {logementEnCours.tags.map((tags, index) => (
                <li key={index}>{tags}</li>
              ))}
            </ul>
          </div>
          <div className="infoshost">
            <div className="host">
              <h2>{logementEnCours.host.name}</h2>
              <img
                src={logementEnCours.host.picture}
                alt={logementEnCours.host.name}
              ></img>
            </div>
            <div className="rating">
              <Ratings rates={logementEnCours.rating} />
            </div>
          </div>
        </div>
        <div className="detailsLogement">
          <DropDown title="Description" display={text} className="dropdown" />
          <DropDown title="Équipements" display={list} className="dropdown" />
        </div>
        <Footer />
      </div>
    );
  }
}
export default PageProduit;
