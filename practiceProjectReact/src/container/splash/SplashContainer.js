import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import SplashComponent from "../../component/splash/SplashComponent";

function SplashContainer() {
  const [checked, setchecked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setchecked(true);
    }, 1200);

    setTimeout(() => {
      setchecked(false);
    }, 3500);

    setTimeout(() => {
      history.push("/");
    }, 7000);
  }, []);

  return <SplashComponent checked={checked} />;
}

export default SplashContainer;
