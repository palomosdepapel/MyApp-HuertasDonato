import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul style={{display:'flex', justifyContent:'space-around'}}>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/categoria/hombres" >Hombre</NavLink>
            </li>
            <li>
                <NavLink to="/categoria/mujeres" >Mujer</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar