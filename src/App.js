import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Components/404/Error404";
import CartProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
