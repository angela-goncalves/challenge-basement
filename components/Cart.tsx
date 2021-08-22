import Image from "next/image";

import yourCart from "../public/yourCart.svg";
import yourcart from "../public/your-cart.svg";
import closemodal from "../public/close.svg";

import shirt from ".//../public/products/shirt.png";
export default function Cart() {
  return (
    <div className="md:p-6 flex flex-col justify-center w-full md:max-w-4xl ">
      <button className="self-end mt-5 mr-4 md:mt-10 md:mr-0">
        <Image alt="your-cart" src={closemodal} />
      </button>
      <div className="my-5 md:my-12 text-center ">
        <div className="hidden lg:block">
          <Image alt="your-cart" src={yourCart} />
        </div>
        <div className="lg:hidden">
          <Image alt="your-cart" className="lg:hidden" src={yourcart} />
        </div>
      </div>
      <div className="flex md:space-x-3 border-2 mx-4 md:m-0 ">
        <div className="w-full md:w-64">
          <Image alt="{title}" height={500} src={shirt} width={400} />
        </div>
        <div className="w-full flex flex-col justify-between md:p-3 space-y-4">
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-sm md:text-4xl my-2">BLACK T-SHIRT</h3>
            <p className="text-gray-400 text-xs md:text-xl">description</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:pb-3 space-y-2">
              <div className="flex items-center space-x-3 md:justify-between ">
                <p className="text-xs md:text-xl">QUANTITY:</p>
                <div className="px-2 py-1 space-x-4 flex justify-between border-2 rounded-full text-xs md:text-xl">
                  <button>-</button>
                  <p>n</p>
                  <button>+</button>
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
            <p className="text-lg md:text-4xl md:self-end">$price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
