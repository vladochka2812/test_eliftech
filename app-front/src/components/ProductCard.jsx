import React from "react";

const ProductCard = (img, name, price, description) => {
  return (
    <div>
      <img className="h-[150px] w-[200px]" src={img} alt="shop" />
    </div>
  );
};

export default ProductCard;
