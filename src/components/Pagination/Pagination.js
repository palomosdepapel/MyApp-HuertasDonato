import "./Pagination.css";
import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a href="index.html" className="page-link">
            Anterior
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="index.html">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="index.html">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="index.html">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="index.html">
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
