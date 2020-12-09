import React from "react";
import "./search-styles.css";

export const Search = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handlerEvent}
    />
  );
};
