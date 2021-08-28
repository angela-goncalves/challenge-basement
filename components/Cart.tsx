import Image from "next/image";
import React, {FC} from "react";

import CartProduct from "../components/CartProduct";
import close from "../public/close.svg";
import yourCart from "../public/yourCart.svg";
import yourcart from "../public/your-cart.svg";

interface CartProps {
  setOpen: any;
  less: any;
  add: any;
  counter: number;
  setList: any;
  cart: any;
}
const Cart: FC<CartProps> = ({setOpen, less, add, cart}) => {
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
      <div>
        <p />
        {cart.map((products: any) => {
          const {title, image, price, description, counter, total} = products;

          return (
            <div key={Date.now()}>
              <CartProduct
                add={add}
                counter={counter}
                description={description}
                image={image}
                less={less}
                price={price}
                title={title}
                total={total}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
