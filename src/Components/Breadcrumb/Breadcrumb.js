import "./Breadcrumb.css";
import React from 'react'
import { NavLink } from 'react-router-dom';

const Breadcrumb = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                    <li className="breadcrumb-item"><NavLink to="/">Relojes</NavLink></li>
                    {/* <li className="breadcrumb-item"><NavLink to="/category/hombre">Hombres</NavLink></li> */}
                    <li className="breadcrumb-item active" aria-current="page">Hombres</li>
                </ol>
            </nav>
        </div>

    )
}

export default Breadcrumb