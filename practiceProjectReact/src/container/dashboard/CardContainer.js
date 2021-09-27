import React from "react";
import CardComponent from "../../component/dashboard/CardComponent";

function CardContainer({ blogs: blogs }) {
  return (
    <CardComponent
      imageURL="https://image.shutterstock.com/image-photo/business-woman-drawing-global-structure-260nw-1006041130.jpg"
      blogs={blogs}
    ></CardComponent>
  );
}

export default CardContainer;
