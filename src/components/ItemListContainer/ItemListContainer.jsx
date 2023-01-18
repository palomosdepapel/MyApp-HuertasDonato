import React from 'react';
import './ItemListContainer.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Pagination from "../Pagination/Pagination";
import Sidebar from "../Sidebar/Sidebar";
import useFirebase from '../../hook/useFirebase';
import { Link, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
//import ItemList from '../ItemList/ItemList'
//import Loader from '../Loader/Loader';
//import { useEffect } from 'react';

const ItemListContainer = () => {

  const { productos } = useFirebase()
  const { categoria } = useParams()

  const filtrado = categoria ? productos.filter((item) => item.categoria === categoria) : productos
  const MAX_LENGTH = 125; // límite a los caracteres del párrafo en las cards de productos
  return (


    <div>

      <main className="App-main mt-5 pt-5">

        <div className="container">
          <Breadcrumb />
        </div>

        <div className="container d-md-flex align-items-stretch">

          <Sidebar />

          <div id="content" className="p-2 p-md-2 pt-5">
            <section>
              <div className="container">
                <div className="row">         

                  {filtrado.map(({ id, nombre, precio, descuento, image, descripcion }) => (

                      <div className='col-sm-6 col-md-6 col-lg-4'>
                        <div className="card pb-4">
                          {/* <Link className="position-absolute top-0 end-0 btn btn-link"><i className="bi bi-heart"></i></Link> */}
                          <Link  key={id} to={`/itemDetail/${id}`} className="card-body">
                            <img src={image} className="card-img-top" alt="..."/>
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{descripcion.substring(0, MAX_LENGTH)} ...</p>
                            <div className='row'>
                              <div className='col-6'><p className='card-discount'><del>$ {descuento}</del></p></div>
                              <div className='col-6'><p className='card-price text-end'>$ {precio}</p></div>
                            </div>        
                          </Link>
                          <ItemCount/>
                        </div>
                      </div>
                  ))}

                </div>
              </div>
              <div className="container pt-5">
                <div className="row">
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ItemListContainer