import React from "react";

const Item = ({image, name }) => {
  return (
    <div className="categoryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default Item;