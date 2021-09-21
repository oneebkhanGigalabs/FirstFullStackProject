import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import SplashComponent from "../component/splash/SplashComponent";

function SplashContainer() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setchecked(true);
    }, 1500);

    setTimeout(() => {
      setchecked(false);
    }, 3500);

    setTimeout(() => {
      history.push("/");
    }, 7000);
  }, []);

  const [checked, setchecked] = useState(false);
  return <SplashComponent checked={checked} />;
}

export default SplashContainer;
