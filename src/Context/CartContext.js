import React, { useState, useContext } from "react";

console.log(React.createContext());
const CartContext = React.createContext([]);
console.log(CartContext); // Object CartContext, Provider is an atribute. To access, CartContext.Provider

export const useCartContext = () => useContext(CartContext); //--> this alows dont have to import useState and useCartContext every time  we need it; just by calling useCartContext, we will creat the context we need. NO necesitamos importar el CartContext ni el hook useContext. Solo importamos la funcion que realizamos, la cual devuelve ambas cosas.

const CartProvider = ({ children }) => {
  //--> this component will be imported in App.jsto to generate context and provide data.
  const [cart, setCart] = useState([]); // --> almacenar carrito

  //-------------addProduct functions-------------

  //1) THE QUANTITES ARE OVERWRITEN, NOT ACUMULATE.
  // const addProduct = (item, newQuantity) => { //->
  //   const newCart = cart.filter(prod => prod.id !== item.id); //--> si esta, lo saca para despues pushearlo con una nueva cantidad, para finalmente, setear el nuevo carrito. dont accept duplicates
  //   newCart.push({...item,quantity: newQuantity}); //--> add new product with newQuantity.
  //   setCart(newCart);
  // }

  //2)THE PRODUCTS/QUANTITIES ARE ACUMULATED, NOT OVERWRITTEN
  // const addProduct = (item, newQuantity) => {
  //   const {quantity = 0} = cart.find (prod => prod.id === item.id) || {};
  //   const newCart = cart.filter(prod => prod.id !== item.id);
  //   setCart([...newCart, {...item, quantity: quantity + newQuantity}])
  // }

  console.log("Carrito: ", cart);

  // 3) 
  // const addProduct = (item, quantity) => {
  //   let newCart;
  //   let product = cart.find((product) => product.id === item.id);
  //   if (product) {
  //     product.quantity += quantity;
  //     newCart = [...cart];
  //   } else {
  //     product = { ...item, quantity: quantity };
  //     newCart = [...cart, product];
  //   }
  //   setCart(newCart);
  // };

  //4)
  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
     
    
      //--> if the product is in cart, i dont want to add it, i want to find it and update the quantity
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
      console.log('Price: ',item.price ,'Quantity: ', quantity);
    }
  };

  const totalPrice =  () => cart.reduce((prev, act) => prev  + act.quantity  *  act.price, 0);

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);

  const clearCart = () => setCart([]); //--> clear cart is equal to set cart as an empty cart

  const isInCart = (id) => cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id)); //--> an array will be create  without the product with that product.id

  return (
    //--> The component will return the CartContext object and the value will have an object with all data we need (functions)
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts, 
        cart
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
