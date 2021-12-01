import Image from "next/image";
import React from "react";

import close from "../public/close.svg";
import yourCart from "../public/yourCart.svg";
import yourcart from "../public/your-cart.svg";
import {ProductType} from "../product/types";

import ProductCart from "./ProductCart";

const Cart = ({setOpen, cart, addToCart, setCart, counter}: ProductType) => {
  const totalOnly = cart
    .map((elem: any) => elem.total * elem.counter)
    .reduce((a: any, b: any) => a + b, 0);

  return (
    <div className="md:px-8 md:pt-8 flex flex-col justify-center md:border-l-2 md:border-b-2 overscroll-auto h-screen">
      <button className="text-right mt-5 mr-4" type="button" onClick={() => setOpen(false)}>
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
      <div className="overflow-y-auto">
        {cart.map((product: any, index: any) => {
          return (
            <div key={index} className="mb-4">
              <ProductCart
                addToCart={addToCart}
                cart={cart}
                counter={counter}
                product={product}
                setCart={setCart}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col mt-14 md:mt-40 md:flex-row md:items-center md:border-t-2">
        <div className="w-full flex justify-between items-center text-xl px-4 ">
          <h3 className="md:py-6 md:pl-8 md:text-4xl">Total:</h3>
          <p className="md:text-4xl">{totalOnly}</p>
        </div>
        <button className="text-5xl font-bold md:text-4xl text-center border-t-2 md:border-l-2 md:border-0 pt-2 md:px-8">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
