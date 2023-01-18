import React from 'react';
import useFirebase from '../../hook/useFirebase';
import { Link, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
//import Loader from '../Loader/Loader';
//import { useEffect } from 'react';

const ItemListContainer = () => {

    const {productos} = useFirebase()
    const { categoria } = useParams()

    const filtrado = categoria ? productos.filter((item) => item.categoria === categoria) : productos
    
  return (
    <div>
        <h1>ItemListContainer</h1>



{/*         {productos.map(({id, nombre, categoria}) => (
            <Link key={id} to={`/itemDetail/${id}`}>
                <h1>{nombre}</h1>
                <p>{categoria}</p>
            </Link>
        ))} */}

        {filtrado.map(({id, nombre, categoria }) => (
          <Link key={id} to={`/itemDetail/${id}`}>
            <h1>{nombre}</h1>
            <p>{categoria}</p>
          </Link>
          
        ))}

    </div>
  )
}

export default ItemListContainer