import React, { useState, useContext } from "react";
import { UserContext } from "../App";

function CartCard() {
  const { product } = useContext(UserContext);
  const [quantities, setQuantities] = useState(Array(product.length).fill(0)); 

  const addQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const removeQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1; 
    }
    setQuantities(newQuantities);
  };

  const totalQuantity = quantities.reduce((total, qty) => total + qty, 0);
  const totalAmount = product.reduce(
    (total, item, index) => total + item.price * quantities[index],
    0
  );

  const addToCart = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  return (
    <div className="container">
      {product.map((e, index) => (
        <div
          key={e.id}
          className="card mb-5 border border-secondary"
          style={{ minWidth: "100%", maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-3">
              <a href={e.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={e.image}
                  className="img-fluid rounded-start cardImage"
                  alt={e.title}
                />
              </a>
            </div>
            <div className="col-md-9">
              <div className="card-body d-flex justify-content-between flex-column px-3">
                <div>
                  <a 
                    href={e.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-title" 
                    style={{ textDecoration: 'none', color: 'inherit' }} 
                  >
                    <h5>{e.title}</h5>
                  </a>
                  <h4 className="card-title">${e.price.toFixed(2)}</h4>
                  <p className="card-text clamped-text">{e.description}</p>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={() => addToCart(index)}
                  >
                    Add to Cart
                  </button>
                  {quantities[index] > 0 && (
                    <div className="d-flex align-items-center mt-2 justify-content-end">
                      <span className="me-2">Quantity: {quantities[index]}</span>
                      <span
                        className="remove-label"
                        onClick={() => removeQuantity(index)}
                      >
                        Remove
                      </span>
                    </div>
                  )}
                </div>

                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <span>Total Amount for this item:</span>
                  <h5 className="card-text">
                    ${(e.price * quantities[index]).toFixed(2)}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
        <h4>Total Quantity: {totalQuantity}</h4>
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
      </div>
      <button type="button" className="btn btn-primary float-end my-3">
        Proceed to pay
      </button>
    </div>
  );
}

export default CartCard;
