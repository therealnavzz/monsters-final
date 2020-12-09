import React from "react";
import "./card-styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
        alt="Img Monsters"
      />
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.address.city}</h3>
    </div>
  );
};
