import React from "react";

function PatnerCard(props) {
  const { patnerDetails } = props;
  const { name, link, logo, description } = patnerDetails;
  return (
    <li className="col-md-6 col-12 col-lg-4">
      <a href={link} className="patner-card text-center p-4">
        <img src={logo} alt={name} className="w-50" />
        <br />
        <p className="small text-secondary">{description}</p>
      </a>
    </li>
  );
}

export default PatnerCard;
