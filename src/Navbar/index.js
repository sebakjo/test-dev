import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useHistory } from "react-router-dom";
import useWidth from "../useWidth";

export default () => {
  const [active, setActive] = useState(false);
  const location = useLocation().pathname.split("/")[1];
  const history = useHistory();
  const width = useWidth().width;

  function goTo(where) {
    history.push(where);
  }
  return (
    <Navbar
      location={location}
      goTo={goTo}
      active={active}
      setActive={setActive}
      width={width}
    />
  );
};
