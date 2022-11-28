import React from "react";
import { Link } from "react-router-dom";

import "../styles/thumb.css";

function Thumb({ id, title, cover }) {
  /*
  
  */
  return (
    <Link to={id}>
      <div className="shadow">
        <img src={cover} alt={title} />

        <h3>{title}</h3>
      </div>
    </Link>
  );
}
export default Thumb;
