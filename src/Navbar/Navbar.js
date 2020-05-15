import React from "react";
import "./navbar.css";

export default ({ location, goTo, active, setActive, width }) => (
  <div className="container">
    <div className="buttonsContainer">
      <img
        src="/navbar/logo.png"
        srcSet="/navbar/logo@2x.png 2x,
             /navbar/logo@3x.png 3x"
        alt="logo"
        className="logo"
        onClick={() => goTo("/modelos")}
      />
      {width > 800 && (
        <div
          className={location === "modelos" ? "buttons-active" : "buttons"}
          onClick={() => {
            goTo("/modelos");
            setActive(false);
          }}
        >
          Modelos
        </div>
      )}
      {width > 800 && (
        <div className={location === "ficha" ? "buttons-active" : "buttons"}>
          Ficha De Modelo
        </div>
      )}
    </div>
    <div className={width > 800 ? "menu" : "menuMobile"}>
      <div className="menuText">Menú </div>
      <img
        src="/navbar/gray.png"
        srcSet="/navbar/gray@2x.png 2x,
             /navbar/gray@3x.png 3x"
        className="gray"
        alt="gray"
        onClick={() => setActive(!active)}
      />
      {active && (
        <div className="navDropdown">
          <div className="closeIcon">
            Close{" "}
            <img
              src="/navbar/fill-1.png"
              srcSet="/navbar/fill-1@2x.png 2x,
             /navbar/fill-1@3x.png 3x"
              onClick={() => setActive(!active)}
              alt="img"
            ></img>
          </div>
          <div className="dropDownBlock">
            <h3>Modelos</h3>
            <h3>Servicios y Accesorios</h3>
            <h3>Fincanciación</h3>
            <h3>Reviews y Comunidad</h3>
          </div>
          <div className="dropDownBlock2">
            <h3>Toyota Mobility Service</h3>
            <h3>Toyota Gazoo Racing</h3>
            <h3>Toyota Híbridos</h3>
          </div>
          <div className="dropDownBlock2">
            <h3>Concesionarios</h3>
            <h3>Test Drive</h3>
            <h3>Contacto</h3>
          </div>
          <div className="dropDownBlock3">
            <h3>Actividades</h3>
            <h3>Servicio al cliente</h3>
            <h3>Ventas Especiales</h3>
            <h3>Innovación</h3>
            <h3>Prensa</h3>
            <h3>Acerca de...</h3>
          </div>
        </div>
      )}
    </div>
  </div>
);
