import Image from "next/image";
import React, {FC} from "react";

interface ProductProps {
  title: string;
  image: string;
  price: number;
}
const Product: FC<ProductProps> = ({title, image, price}) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Image alt={title} height={550} src={image} width={450} />
      <div className="flex justify-between border-t-2 pt-2">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
