import React from "react";
import CardComponent from "../component/dashboard/CardComponent";

function CardContainer() {
  return (
    <div style={{ "padding-top": "90px" }}>
      <CardComponent
        title="Lights"
        imageURL="https://image.shutterstock.com/image-photo/business-woman-drawing-global-structure-260nw-1006041130.jpg"
        content=""
        id="6"
      ></CardComponent>
    </div>
  );
}

export default CardContainer;
