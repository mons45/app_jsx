import React from "react";

function Product({ title, price, thumbnail }) {
  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-primary fw-bold">{price}</p>
          <button type="button" className="btn btn-outline-primary mt-auto">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
