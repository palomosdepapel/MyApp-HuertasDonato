import logo from '../Navbar/logo.svg'
import './Navbar.css';
import React from 'react'
//import Cartwidget from './CartWidget/Cartwidget'
//import './CartWidget/Cartwidget.css';
import { NavLink } from 'react-router-dom';

const Navbar = (/* props */) => {
  //const {productsCart} = props;
  //console.log(productsCart);
  return (
    <header>
      <nav className="navbar navbar-expand-xl bg-light fixed-top px-2">
        <div className="container-fluid">

          <NavLink className={'navbar-brand d-none d-xl-block'} to="/"><img src={logo} className="App-logo" alt="Sue Jewellery" title="Sue Jewellery" /></NavLink>
          <NavLink className={'navbar-brand d-xl-none d-xl-block'} to="/"><img src={logo} className="App-logo" alt="Sue Jewellery" title="Sue Jewellery" /></NavLink>

          <form className="flex-fill d-xl-none d-xl-block flexi" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar..."
            />
          </form>
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <NavLink href="#OpenCart" className="btn btn-light btn-lg position-relative mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" title="Cart">
            {productsCart.length > 0 ? (
              // Si el carrito tiene uno o más productos, el ícono aparece lleno, caso contrario aprecerá vacío
              <><i className="bi bi-cart-fill"></i> <Cartwidget /></>
              ):(
              <i className="bi bi-cart"></i>
            )}
            
          </NavLink> */}
          <div
            className="collapse navbar-collapse px-2"
            id="navbarSupportedContent"
          >
            <form className="d-flex d-none d-xl-block" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar..."
              />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3">
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/category/matrimonio" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Matrimonio
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/category/anillocompromiso">Compromiso</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/anillosolitario">- Anillo Solitario</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/anillodeclaracion">- Anillo con Declaración</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/anillopisaargolla">- Argolla Pisaargolla</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/anillopiedracertificada">- Anillos con piedra Certificada</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="/category/argollas">Argollas</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/category/aretes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Aretes
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/category/topos">Topos</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/candongas">Candongas</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/aretes_">Aretes</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/dijes">Dijes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/anillos">Anillos</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pulseras y cadenas
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/category/cadenas">Cadenas</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/aros">Aros</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/pulseras">Pulseras</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/esclavas">Esclavas</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/denarios">Denarios</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/tobilleras">Tobilleras</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/category/collares" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collares
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/category/gargantillas">Gargantillas</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/collares_">Collares</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/category/rosarios">Rosarios</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle active" to="/category/relojes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Relojes
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/categoria/hombres">Relojes Hombre</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/categoria/mujeres">Relojes Mujer</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/categoria/inteligentes">Relojes Inteligentes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/categoria/fashion">Fashion</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/categoria/deportivos">Deportivos</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/categoria/clasicos">Clásicos</NavLink></li>
                </ul>
              </li>
            </ul>
            <a href="index.html" className="btn btn-primary d-sm-inline-flex"
            >Suscripción <i className="bi bi-arrow-right-circle ms-2"></i
            ></a>
            <a href="index.html" className="btn btn-light btn-lg" title="Ingrese o regístrese"
            ><i className="bi bi-person-fill"></i></a>

          </div>
        </div>
      </nav>
    </header>

  )
}

export default Navbar