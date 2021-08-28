import Image from "next/image";
import React, {FC} from "react";
interface ProductProps {
  title: string;
  image: string;
  price: number;
  description: string;
  counter: number;
  setCart: any;
  setOpen: any;
}
const Product: FC<ProductProps> = ({
  title,
  image,
  price,
  description,
  counter,
  setOpen,
  setCart,
}) => {
  const handleOnClick = (counter: number) => {
    setCart((prev: any) => [...prev, {title, description, image, price, total: counter * price}]);
    setOpen(true);
  };

  return (
    <div className="h-full">
      <button className="h-full" onClick={() => handleOnClick(counter)}>
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
