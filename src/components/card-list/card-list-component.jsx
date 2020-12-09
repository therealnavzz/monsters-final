import React from "react";
import "./card-list-styles.css";
import "../card/card-component";
import { Card } from "../card/card-component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monster.map((mons) => (
        <Card key={mons.id} monster={mons} />
      ))}
    </div>
  );
};
