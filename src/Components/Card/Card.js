import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (p) => {

  const {img,name,id} = p;
  // console.log(id);

  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card pb-4">
      <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title text-center">{name}</h5>
          <Link to={`/detail/${id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
