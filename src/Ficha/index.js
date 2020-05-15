import React, { useEffect } from "react";
import "./ficha.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uniqueFetch } from "../store/actions/cars";
import Carousel from "../Carousel";

export default () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (name) dispatch(uniqueFetch(name));
  }, []);
  const car = useSelector(state => state.uniqueCar);

  return (
    <div>
      {car.name && (
        <div>
          <div className="firstBlock">
            <img
              src={"http://challenge.agenciaego.tech" + car.photo}
              className="firstPhoto"
              alt="img"
            />
            <div className="titleContent">
              <h3>{`${car.name}`}</h3>
              <h1>{`${car.title}`}</h1>
              <p>{car.description}`</p>
            </div>
          </div>
          <Carousel car={car} />
          <div className="firstBlock1">
            <div className="titleContent1">
              <h3>{car["model_highlights"][0].title}</h3>
              <p>{car["model_highlights"][0].content}</p>
            </div>
            <img
              src={
                "http://challenge.agenciaego.tech" +
                car["model_highlights"][0].image
              }
              className="layer"
              alt="img"
            ></img>
          </div>

          <div className="firstBlock">
            <img
              src={
                "http://challenge.agenciaego.tech" +
                car["model_highlights"][1].image
              }
              className="layer"
              alt="img"
            ></img>
            <div className="titleContent1">
              <h3>{car["model_highlights"][1].title}</h3>
              <p>{car["model_highlights"][1].content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
