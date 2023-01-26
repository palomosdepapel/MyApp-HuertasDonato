import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <NavLink className= "btn btn-light btn-lg position-relative mx-2" to="/cart">
        <i className="bi bi-cart2 cart-widget position-relative"></i>
      </NavLink>
      <span className="position-absolute custom-traslate badge rounded-pill bg-black">
        {cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
