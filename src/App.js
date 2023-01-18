//import React, { useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Error404 from "./components/Error404/Error404";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route path='/itemDetail/:id' element={<ItemDetail/>} />
        <Route path='/carrito' element={<Cart/>} />
        <Route path="*" element={<Error404/>} /> 
      </Routes>
     
    </Router>
  );
}

export default App;
