import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();


  const order ={
    buyer: {
      name:'Juan',
      email:'jhuertas@gmail.com',
      phone:'574554430315',
      address: 'Dir'
    },
    items: cart.map(product => ({id:product.id, name:product.name,price:product.price, quantity: product.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({id}) => console.log(id));
  }
  //Conditional rendering
  if (cart.length === 0) {
    return (
      <>
        <main className="App-main mt-5 pt-5">
          <div className="container pb-5">
            <div className="row">
              <div className="col-12">
                <p>No hay items en el carrito</p>
                <Link className="btn btn-primary d-sm-inline-flex" to="/"> Ir a la tienda </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
      <main className="App-main mt-5 pt-5">
          <div className="container pb-5">
            <div className="row">
              <div className="col-12">
                {console.log(cart.length)}
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
                <p className="d-flex justify-content-center">total: ${totalPrice()}</p>
                <button className="btn btn-primary d-sm-inline-flex" onClick={handleClick}>Checkout</button>
              </div>
            </div>
          </div>
        </main>
        
      </>
    );
  }
};

export default Cart;
