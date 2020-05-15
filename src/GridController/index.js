import React, { useState, useEffect } from "react";
import GridController from "./GridController";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/actions/cars";
import useWidth from "../useWidth";

export default () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("Todos");
  const [activeMobile, setActiveMobile] = useState(false);
  useEffect(() => {
    dispatch(filter(cars, activeDropdown, active, allCars));
  }, [active]);

  const [activeDropdown, setActiveDropdown] = useState("Nada");
  const [showDropdown, setShowDropdown] = useState(false);
  const tabs = ["Todos", "Autos", "Pickups y Comerciales", "SUV"];
  const dropdownButtons = [
    "Nada",
    "De menor a mayor precio",
    "De mayor a menor precio",
    "Más nuevos primero",
    "Más viejos primero"
  ];
  const allCars = useSelector(state => state.allCars);
  const cars = useSelector(state => state.cars);
  const width = useWidth().width;
  return (
    <GridController
      tabs={tabs}
      active={active}
      activeMobile={activeMobile}
      setActive={setActive}
      setActiveMobile={setActiveMobile}
      dispatch={dispatch}
      allCars={allCars}
      cars={cars}
      showDropdown={showDropdown}
      setShowDropdown={setShowDropdown}
      dropdownButtons={dropdownButtons}
      activeDropdown={activeDropdown}
      setActiveDropdown={setActiveDropdown}
      width={width}
    />
  );
};
