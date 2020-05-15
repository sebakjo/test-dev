import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Modelos from "./Modelos";
import Ficha from "./Ficha";
import { modelsFetch } from "./store/actions/cars";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modelsFetch());
  });
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/modelos" component={() => <Modelos />} />
        <Route exact path="/ficha/:name" component={Ficha} />
        <Redirect to="/modelos"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
