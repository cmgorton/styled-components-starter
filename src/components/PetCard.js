import React from "react";

// <div> used to have className="dog-card"
// <img> used to have className="dog-image"

const PetCard = props => {
  return (
    <div>
      <img alt="random dog" src={props.imgUrl} />
      <h2>{props.breed}</h2>
    </div>
  );
};
export default PetCard;
