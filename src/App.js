//import React, { useState , useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Error404 from "./components/Error404/Error404";

function App() {

  

  return (
    <div className='App'>

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
    <Footer />
    </div>
  );
}

export default App;
