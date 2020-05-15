import React from "react";
import Grilla from "./Grilla";
import { useSelector } from "react-redux";

export default () => {
  const cars = useSelector(state => state.cars);
  return <Grilla items={cars} />;
};
