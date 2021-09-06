import Image from "next/image";
import React, {FC} from "react";

interface ProductProps {
  title: string;
  image: string;
  price: number;
  id: number;
  cart: any;
  counter: number;
  description: string;
  addToCart: any;
  setOpen: any;
}
const Product: FC<ProductProps> = ({
  title,
  image,
  price,
  description,
  id,
  setOpen,
  addToCart,
  counter,
}) => {
  const handleOnClick = () => {
    addToCart({title, image, price, description, id, counter});
    setOpen(true);
  };

  return (
    <div className="h-full">
      <button className="h-full" onClick={() => handleOnClick()}>
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
