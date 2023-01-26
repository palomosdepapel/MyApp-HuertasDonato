import React from "react";
import Card from "../Card/Card";
//import { NavLink } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <>
      
      <div className="row">
        {productos.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            name={p.nombre}
            img={p.image}
            price={p.precio}
            category={p.categoria}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
