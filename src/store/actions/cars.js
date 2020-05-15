import axios from "axios";

import {
  CAT_FILTER,
  MOST_EXPENSIVE_FILTER,
  CHEAPER_FILTER,
  NEWEST_FILTER,
  OLDEST_FILTER,
  ALL_CARS,
  SET_CAR
} from "../constants";

export function categoryFilter(cars, cat) {
  return {
    cars: cars,
    type: CAT_FILTER,
    cat
  };
}

function setAllCars(cars) {
  return {
    cars: cars,
    type: ALL_CARS
  };
}

function setSingleCar(car) {
  return {
    car: car,
    type: SET_CAR
  };
}

export function modelsFetch() {
  return dispatch =>
    axios
      .get("http://challenge.agenciaego.tech/models")
      .then(models => dispatch(setAllCars(models.data)));
}

export function uniqueFetch(id) {
  return dispatch =>
    axios
      .get(`http://challenge.agenciaego.tech/models/${id}`)
      .then(model => dispatch(setSingleCar(model.data)));
}

export function filter(cars, type, cat, allCars) {
  switch (type) {
    case "De menor a mayor precio":
      return {
        cars: cars,
        type: CHEAPER_FILTER
      };
    case "De mayor a menor precio":
      return {
        cars: cars,
        type: MOST_EXPENSIVE_FILTER
      };
    case "Más nuevos primero":
      return {
        cars: cars,
        type: NEWEST_FILTER
      };
    case "Más viejos primero":
      return {
        cars: cars,
        type: OLDEST_FILTER
      };
    case "Nada":
      return {
        cars: allCars,
        type: CAT_FILTER,
        cat
      };

    default:
      break;
  }
}
