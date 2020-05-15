import React from "react";
import "./gridController.css";
import Button from "./Button";
import DropDownButton from "./DropDownButton";

export default ({
  tabs,
  active,
  setActive,
  dispatch,
  allCars,
  showDropdown,
  setShowDropdown,
  dropdownButtons,
  setActiveDropdown,
  activeDropdown,
  cars,
  width,
  setActiveMobile,
  activeMobile
}) => (
  <div className="controllerContainer">
    {width > 800 && <p>Ordenar por</p>}
    {width > 800 ? (
      <div>
        {tabs.map((button, i) => (
          <Button
            content={button}
            active={active}
            setActive={setActive}
            key={i}
            dispatch={dispatch}
            cars={allCars}
          />
        ))}
      </div>
    ) : (
      <button
        className="dropdown"
        onClick={() => setActiveMobile(!activeMobile)}
      >
        Ordenar Por{" "}
        <img
          src="/fill-1.png"
          srcSet="/fill-1@2x.png 2x,
             /fill-1@3x.png 3x"
          className="Fill-1"
          alt=""
        ></img>
        {activeMobile && (
          <div className="dropdownbox">
            {tabs.map((button, i) => (
              <DropDownButton
                content={button}
                key={i}
                cars={cars}
                allCars={allCars}
                active={active}
                activeDropdown={activeMobile}
                setActiveDropdown={setActive}
                dispatch={dispatch}
                mobile={true}
              />
            ))}
          </div>
        )}
      </button>
    )}

    <button className="dropdown" onClick={() => setShowDropdown(!showDropdown)}>
      Filtrar por{" "}
      <img
        src="/fill-1.png"
        srcSet="/fill-1@2x.png 2x,
             /fill-1@3x.png 3x"
        className="Fill-1"
        alt=""
      ></img>
      {showDropdown && (
        <div className="dropdownbox">
          {dropdownButtons.map((button, i) => (
            <DropDownButton
              content={button}
              key={i}
              cars={cars}
              allCars={allCars}
              active={active}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </button>
  </div>
);
