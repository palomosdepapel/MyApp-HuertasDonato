import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./CartItem.css";
const CartItem = ({product}) => {

  const {removeProduct} = useCartContext();

  return (
    <div className="cartItem">
      <img src={product.img} alt={product.title}/>
      <div>
        <p>{product.title}</p>
        <p>{product.quantity}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price  } </p>
        <button className="btn btn-primary d-sm-inline-flex" onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
