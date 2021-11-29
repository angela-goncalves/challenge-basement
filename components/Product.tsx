import Image from "next/image";
import React from "react";

import {ProductType} from "../product/types";

const Product = ({setOpen, product, addToCart, counter}: ProductType) => {
  const {title, image, price, description, id} = product;
  const handleOnClick = () => {
    addToCart({title, image, price, description, id, counter});
    setOpen(true);
  };

  return (
    <div className="h-full">
      <button className="h-full" onClick={handleOnClick}>
        <div className="h-full flex flex-col justify-between">
          <Image alt={title} height={550} src={image} width={450} />
          <div className="flex justify-between border-t-2 pt-2">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Product;
