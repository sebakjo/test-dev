import {
  CAT_FILTER,
  MOST_EXPENSIVE_FILTER,
  CHEAPER_FILTER,
  NEWEST_FILTER,
  OLDEST_FILTER,
  ALL_CARS,
  SET_CAR,
} from "../constants";

const initialState = {
  allCars: [],
  uniqueCar: {},
  cars: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_CARS:
      return Object.assign({}, state, {
        cars: action.cars,
        allCars: action.cars,
      });
      
    case SET_CAR:
      return Object.assign({}, state, {
        uniqueCar: action.car,
      });

    case CAT_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      if (action.cat === "Todos") {
        return Object.assign({}, state, {
          cars: action.cars,
        });
      }
      return Object.assign({}, state, {
        cars: carsToBeFiltered.filter((car) =>
          car.segment.includes(action.cat)
        ),
      });
    }

    case MOST_EXPENSIVE_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        }),
      });
    }

    case CHEAPER_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        }),
      });
    }

    case NEWEST_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.year > b.year) {
            return -1;
          }
          if (a.year < b.year) {
            return 1;
          }
          return 0;
        }),
      });
    }

    case OLDEST_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.year > b.year) {
            return 1;
          }
          if (a.year < b.year) {
            return -1;
          }
          return 0;
        }),
      });
    }

    default:
      return state;
  }
}
