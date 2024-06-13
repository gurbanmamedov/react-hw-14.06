import React from "react";

const ProductCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className="product__card">
      <img src={imageUrl} alt={title} className="product__image" />
      <div className="product__details">
        <h2 className="product__title">{title}</h2>
        <p className="product__price">{price}</p>
        <p className="product__description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
