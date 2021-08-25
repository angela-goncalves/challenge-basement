import Image from "next/image";
import React, {FC} from "react";

import close from "../public/close.svg";
import yourCart from "../public/yourCart.svg";
import yourcart from "../public/your-cart.svg";

// import shirt from ".//../public/products/shirt.png";
interface CartProps {
  title: string;
  image: string;
  price: number;
  setOpen: any;
  description: string;
  lessProduct: any;
  addProduct: any;
  counter: number;
  toCheckout: any;
}
const Cart: FC<CartProps> = ({
  counter,
  title,
  image,
  price,
  setOpen,
  description,
  lessProduct,
  addProduct,
  toCheckout,
}) => {
  return (
    <div className="md:px-8 md:pt-8 flex flex-col justify-center md:border-l-2 md:border-b-2 overscroll-contain overflow-y-scroll">
      <button className="text-right mt-5 mr-4 " type="button" onClick={() => setOpen(false)}>
        <Image alt="close" src={close} />
      </button>
      <div className="md:my-12 text-center ">
        <div className="hidden lg:block">
          <Image alt="your-cart" src={yourCart} />
        </div>
        <div className="lg:hidden px-4">
          <Image alt="your-cart" height={250} src={yourcart} width={400} />
        </div>
      </div>
      <div className="flex md:space-x-3 border-2 mx-4 md:m-0 ">
        <div className="w-full md:w-64">
          <Image alt={title} height={500} src={image} width={400} />
        </div>
        <div className="w-full flex flex-col justify-between md:p-3 space-y-4">
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-sm md:text-4xl my-2">{title}</h3>
            <p className="text-gray-300 text-xs md:text-xl">{description}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:pb-3 space-y-2">
              <div className="flex items-center space-x-3 md:justify-between ">
                <p className="text-xs md:text-xl">QUANTITY:</p>
                <div className="px-2 py-1 space-x-4 flex justify-between border-2 rounded-full text-xs md:text-xl">
                  <button onClick={lessProduct}>-</button>
                  <p>{counter}</p>
                  <button onClick={addProduct}>+</button>
                </div>
              </div>
              <div className="h-6 flex items-center space-x-5 text-xs md:text-xl w-full ">
                <p>SIZE:</p>
                <div className="">
                  <button className="hover:border-2 hover:rounded-full hover:border-white py-1 px-2">
                    S
                  </button>
                  <button className="hover:border-2 hover:rounded-full hover:border-white py-1 px-2">
                    M
                  </button>
                  <button className="hover:border-2 hover:rounded-full hover:border-white py-1 px-2">
                    L
                  </button>
                  <button className="hover:border-2 hover:rounded-full hover:border-white p-2">
                    XL
                  </button>
                </div>
              </div>
            </div>
            <p className="text-lg md:text-4xl md:self-end">${price}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-52 md:mt-60 md:flex-row md:items-center md:border-t-2">
        <div className="w-full flex justify-between items-center text-xl px-4 ">
          <h3 className="md:py-6 md:pl-8 md:text-4xl">Total:</h3>
          <p className="md:text-4xl">${Math.round(price) * counter}</p>
        </div>
        <button
          className="text-5xl font-bold md:text-4xl text-center border-t-2 md:border-l-2 md:border-0 pt-2 md:px-8"
          onClick={toCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
