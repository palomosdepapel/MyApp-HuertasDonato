import React from "react";

import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
//import ItemCount from "../../ItemCount/ItemCount";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]); //--> array con primer valor [0] = [], la posicion 2 [1] es una funcion que actualiza el valor de products, el cual inicial como un array vacio en este caso.

  const { categoryId } = useParams();

    // 1- bring firestore service
    // 2- create pointer to the data we need
    // 3- bring data by promise

  useEffect(() => {

    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'productos');
    
    if (categoryId) {
      
      const queryFilter = query (queryCollection, where('categoria', '==', categoryId)); 
      getDocs(queryFilter).then(res => setProducts(res.docs.map(product =>({id: product.id, ...product.data()})))); 

    } else {
      getDocs(queryCollection).then(res => setProducts(res.docs.map(product =>({id: product.id, ...product.data()})))); 
    } 
  }, [categoryId]);

  return (
    <>
        <main className="App-main mt-5 pt-5">

    <div className="container">
      <Breadcrumb/>
    </div>

    <div className="container d-md-flex align-items-stretch">

      <Sidebar />
      <div  className="p-2 p-md-2 pt-5">
        <section>
          <div className="container">
            
              <ItemList productos={productos} />
              
            </div>
          </section>
      </div>
    </div>
    </main>
    </>
  );
};

export default ItemListContainer;
