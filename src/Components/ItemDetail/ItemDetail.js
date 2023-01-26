import React, { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";

export const ItemDetail = (data) => {

  const [goToCart, setGoToCart] = useState(false);

  const {addProduct} = useCartContext(); //--> to have the context and use addProduct function, we have to import useConext and import the context. In this case we import only one thing that have both (useCartContext function made in CartContext). Then, we can destructuring and catch addProduct function

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data,quantity)
  };

  return (
    <div className="row align-items-center">
      <div className="itemDetail"> 
        <h3 className="text-center"> DETALLE DE PRODUCTO</h3>
        <h5 className="card-title text-center">{data.name}</h5>
        <img src={data.img} className="card-img-top" alt="" />
        <div className="card-body d-flex justify-content-end flex-column">
          {
              goToCart 
              ? <Link className="btn btn-primary" to="/cart">Terminar compra</Link>
              : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
