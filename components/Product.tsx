import Image from "next/image";
import React, {FC, useState} from "react";

import Cart from "../components/Cart";
import CartModal from "../components/CartModal";
interface ProductProps {
  title: string;
  image: string;
  price: number;
  description: string;
  lessProduct: any;
  addProduct: any;
  counter: number;
  setList: any;
  productList: any;
}
const Product: FC<ProductProps> = ({
  title,
  image,
  price,
  description,
  lessProduct,
  addProduct,
  counter,
  setList,
  productList,
}) => {
  const [open, setOpen] = useState(false);

  const toCheckout = (counter: number) => {
    setList((prev: any) => [...prev, {title, description, price, counter, total: price * counter}]);
    console.log(setList);
  };

  return (
    <div className="h-full">
      <button
        className="h-full"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <Image alt={title} height={550} src={image} width={450} />
          <div className="flex justify-between border-t-2 pt-2">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
      </button>
      <div>
        <CartModal open={open} setOpen={setOpen}>
          <Cart
            addProduct={addProduct}
            counter={counter}
            description={description}
            image={image}
            lessProduct={lessProduct}
            price={price}
            setOpen={setOpen}
            title={title}
            toCheckout={toCheckout}
          />
        </CartModal>
      </div>
    </div>
  );
};

export default Product;
