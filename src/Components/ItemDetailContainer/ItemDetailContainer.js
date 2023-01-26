import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
//import config from "../../config.json";
import './ItemDetailContainer.css'
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detailId } = useParams();

  // 1- bring firestore service
  // 2- create pointer to the data we need
  // 3- bring data by promise

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'productos', detailId);
    getDoc(queryDoc).then(res => setData({id: res.id, ...res.data()}));
  }, [ ]);

  return (
    <main className="App-main mt-5 py-5">
        <div className="container">
      <ItemDetail
        // data={data} //--> doesnt render photo products, why? 
        key={data.id}
        id={data.id}
        name={data.nombre}
        img={data.image}
        category={data.categoria}
        price ={data.precio}
        discount ={data.descuento}
      />
    </div>
    </main>
  );
};

export default ItemDetailContainer;
