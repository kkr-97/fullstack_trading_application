import React from "react";
import { Link } from "react-router-dom";

function RightImage(props) {
  const { details } = props;
  const { title, description, imgLink, link } = details;
  return (
    <li className="text-center feature-item d-flex flex-column flex-md-row justify-content-space-between">
      <div className="order-2 order-md-1 d-flex flex-column justify-content-center align-items-center w-md-50">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link to={link} className="w-md-50 order-0 order-md-2">
        {" "}
        <img src={imgLink} alt={title} className="h-auto" />
      </Link>
    </li>
  );
}

export default RightImage;
