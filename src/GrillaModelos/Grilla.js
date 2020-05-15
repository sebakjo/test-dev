import React from "react";
import "./grilla.css";
import GridItem from "../GridItem";

export default ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, i) => (
        <GridItem item={item} key={i} />
      ))}
    </div>
  );
};
