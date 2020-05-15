import React from "react";
import { filter, categoryFilter } from "../store/actions/cars";

export default ({
  content,
  activeDropdown,
  setActiveDropdown,
  dispatch,
  cars,
  active,
  allCars,
  mobile
}) => {
  return (
    <button
      className={
        mobile
          ? active === content
          ? "dropdownbtn"
          : "activedropdownbtn"
          : activeDropdown === content
          ? "dropdownbtn"
          : "activedropdownbtn"
      }
      onClick={() => {
        setActiveDropdown(content);

        dispatch(
          mobile
            ? categoryFilter(allCars, content)
            : filter(cars, content, active, allCars)
        );
      }}
    >
      {content
        .split(" ")
        .map((word, i) =>
          ["menor", "mayor", "nuevos", "viejos"].includes(word) ? (
            <strong key={i}>{word} </strong>
          ) : (
            word + " "
          )
        )}
    </button>
  );
};
