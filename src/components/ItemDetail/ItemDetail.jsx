import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {

    const {id} = useParams()
    const {producto,getProduct/*, guardarNuevoProducto,generateTicket */} = useFirebase()
    const navigate = useNavigate()

    /* const order = {
        nombre:'Hovha',
        apellido:'Petrosyan',
        email:'profe@profe.com',
        items:[
            {
                stock: 20,
                imagen: "https://http2.mlstatic.com/D_NQ_NP_671928-MLA42256921850_062020-O.webp",
                modelo: "JA111",
                categoria: "hombre",
                nombre: "jaguar",
                precio: 20000,
                cantidad:3
            }
        ]
    } */

    console.log(producto)

    useEffect(() => {
      
        getProduct(id)

        if(producto){
            console.log(producto)
        }
    
      return () => {
        
      }
    }, [])



    /* const productoGuardar = {
        stock: 20,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_671928-MLA42256921850_062020-O.webp",
        modelo: "JA111",
        categoria: "hombre",
        nombre: "jaguar",
        precio: 20000
    } */
    


  return (
    <div>
        {producto ? (
            <>
                {/* <h1>{producto.nombre}</h1>
                <img src={producto.image} alt="" />
                <p>Stock : {producto.stock}</p>
                <h4>Precio :{producto.precio}</h4>
                <button onClick={() => navigate(-1)}>Volver</button>
                <button onClick={()=> generateTicket(order)}>Comprar</button>
                <button onClick={()=>guardarNuevoProducto(productoGuardar)}>Agregrar Producto</button> */}

                <main className="App-main mt-5 py-5">
                    <div className="container">
                        <Breadcrumb />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-sm-1">
                            {/* <div>{producto.id}</div> */}
                        </div>
                        <div className="col-sm-5">
                            <img src={producto.image} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-sm-6 position-relative">
                            <div className="product pb-4">

                            <button className='btn btn-primary' onClick={() => navigate(-1)}>Volver</button>

                            <a href="/" className="btn btn-link text-start">
                                <i className="bi bi-heart"></i>
                            </a>
            
                            <div className="product-body pt-5">
                                <h1 className="product-title py-4">{producto.nombre}</h1>
                                <p className="product-text">
                                {producto.descripcion}
                                </p>
                                <div className="d-flex align-content-center align-items-center flex-wrap">
                                <div className="col-6 col-lg-2 pt-2">
                                    <div className="product-discount">
                                    <del>$ {producto.descuento}</del> (-40%)
                                    </div>
                                </div>
            
                                <div className="col-6 col-lg-4 text-end pt-2">
                                    <h4 className="product-price text-center">$ {producto.precio}</h4>
                                </div>
                                <div className="col-12 col-lg-6 text-end">
                                    <ItemCount />
                                </div>
                                </div>
                            </div>
            
                            </div>
                        </div>
                        </div>
                    </div>
                    </main>


            </>
            
        ): <h1>Cargando...</h1>}
    </div>
  )
}

export default ItemDetail