import starRed from "../assets/starRed.svg";
import starGrey from "../assets/starGrey.svg";

function Ratings({ rates }) {
  //rates va permettre d'afficher la note de chaque hôte
  const starIconRed = <img src={starRed} alt="icone etoile" />;
  const starIconGrey = <img src={starGrey} alt="icone etoile" />;

  const range = [1, 2, 3, 4, 5];

  return (
    <div>
      {range.map((rangeElem) =>
        rates >= rangeElem ? (
          <span key={rangeElem.toString()}>{starIconRed}</span>
        ) : (
          <span key={rangeElem.toString()}>{starIconGrey}</span>
        )
      )}
    </div>
  );
}

export default Ratings;
