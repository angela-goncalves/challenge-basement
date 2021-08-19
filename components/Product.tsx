import Image from "next/image";
import React, {FC} from "react";

interface ProductProps {
  title: string;
  image: string;
  price: number;
}
const Product: FC<ProductProps> = ({title, image, price}) => {
  return (
    <div>
      <Image alt={title} height={500} src={image} width={500} />
      <div className="flex">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;
