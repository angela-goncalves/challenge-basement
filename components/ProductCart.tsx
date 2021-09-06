import Image from "next/dist/client/image";
import React from "react";

interface ProductCartProps {
  title: string;
  price: number;
  description: string;
  image: string;
  addToCart: any;
  total: number;
  id: number;
  counter: number;
  setCounter: any;
}
const ProductCart = ({
  title,
  description,
  price,
  id,
  image,
  counter,
  setCounter,
  addToCart,
}: ProductCartProps) => {
  const less = () => {
    if (counter === 1) {
      return;
    }
    addToCart({title, image, price, id, description, counter: counter - 1});
  };
  const add = () => {
    addToCart({title, image, price, id, description, counter: counter + 1});
  };

  return (
    <>
      <div className="flex md:space-x-3 border-2 mx-4 md:m-0 ">
        <div className="w-full md:w-64">
          <Image alt={title} height={500} src={image} width={400} />
        </div>
        <div className="w-full flex flex-col justify-between md:p-3 space-y-4">
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-lg md:text-4xl my-2">{title}</h3>
            <p className="text-gray-300 text-xs md:text-xl">{description}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:pb-3 space-y-2">
              <div className="flex items-center space-x-3 md:justify-between ">
                <p className="text-xs md:text-xl">QUANTITY:</p>
                <div className="px-2 py-1 space-x-4 flex justify-between border-2 rounded-full text-xs md:text-xl">
                  <button onClick={less}>-</button>
                  <p>{counter}</p>
                  <button onClick={add}>+</button>
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
    </>
  );
};

export default ProductCart;
