import React from "react";
import GrillaModelos from "../GrillaModelos";
import "./modelos.css";
import GridController from "../GridController";

export default () => (
  <div className="modelsContainer">
    <h1>Descubrí todos los modelos</h1>
    <GridController />
    <GrillaModelos />
  </div>
);
