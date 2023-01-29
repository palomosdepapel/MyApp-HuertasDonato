import React from "react";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="me-3">
      <div className="mb-3">
        <p className="py-3">
          <strong>12 productos encontrados</strong>
        </p>
      </div>
      <div className="mb-3">
        <p>Ordenar por:</p>
        <select
          className="form-select form-select-sm"
          aria-label="Default select example"
        >
          <option value="1">Cualquier precio</option>
          <option value="2">Menor precio</option>
          <option value="3">Mayor precio</option>
        </select>
      </div>
      <div className="mb-3">
        <h5 className="py-3">Marca</h5>
        <div className="tagcloud">
          <a href="index.html" className="tag-cloud-link">
            Citizen
          </a>
          <a href="index.html" className="tag-cloud-link">
            Claude Bernal
          </a>
          <a href="index.html" className="tag-cloud-link">
            Diesel
          </a>
        </div>
      </div>
      <div className="mb-3">
        <h5 className="py-3">Género</h5>
        <div className="tagcloud">
          <a href="index.html" className="tag-cloud-link">
            Hombre
          </a>
          <a href="index.html" className="tag-cloud-link">
            Mujer
          </a>
          <a href="index.html" className="tag-cloud-link">
            Niño
          </a>
        </div>
      </div>
      <div className="mb-3">
        <h5 className="py-3">Funcionalidad</h5>
        <div className="tagcloud">
          <a href="index.html" className="tag-cloud-link">
            Análogo
          </a>
          <a href="index.html" className="tag-cloud-link">
            Digital
          </a>
          <a href="index.html" className="tag-cloud-link">
            Análogo y digital
          </a>
        </div>
      </div>
      <div className="mb-3">
        <h5 className="py-3">Material</h5>
        <div className="tagcloud">
          <a href="index.html" className="tag-cloud-link">
            Acero
          </a>
          <a href="index.html" className="tag-cloud-link">
            Cuero
          </a>
          <a href="index.html" className="tag-cloud-link">
            Cuero sintético
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
