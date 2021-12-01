import type {NextPage} from "next";
import Image from "next/image";
import React, {useState} from "react";
import type {GetStaticProps} from "next";

import Cart from "../components/Cart";
import CartModal from "../components/CartModal";
import Linkbar from "../components/Linkbar";
import footer from "../public/footer.svg";
import imageheader from "../public/header.svg";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import {ProductType} from "../product/types";

export const getStaticProps: GetStaticProps<any> = async () => {
  const products = await import("../product/mock.json").then((res) => res.default);

  return {
    props: {
      products,
    },
  };
};

const Home: NextPage = ({products}: any) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<any>([]);
  //filtrar el Linkbar por título, y por precio
  const handleOnChange = () => {
    // const inputBar = e.target.value;
    // return getList.filter((each) => each.title.includes(inputBar));
  };
  const totalCounter = cart.reduce((a: any, b: any) => a + b.counter, 0);

  console.log(totalCounter);
  const addToCart = ({title, id, price, description, counter, image}: ProductType) => {
    const bascket = () => {
      const find = cart.findIndex((ele: any) => id === ele.id);

      if (find >= 0) {
        let copy = [...cart];

        copy[find].counter += 1;

        return copy;
      }

      console.log(find);

      return [
        ...cart,
        {
          title,
          description,
          price,
          image,
          id,
          counter: counter,
          total: price * counter,
        },
      ];
    };

    setCart(bascket);
  };

  return (
    <div className="h-full bg-black">
      <Linkbar handleOnChange={handleOnChange} />
      <Navbar counter={totalCounter} setOpen={setOpen} />
      <header className="m-auto text-white text-center">
        <div className="mx-4 md:m-0">
          <Image alt="basement-supply" src={imageheader} />
        </div>
      </header>
      <div className="relative overflow-x-hidden">
        <div className="border-t-2 border-b-2 mt-2 mb-12 md:mt-14 md:mb-24">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-xl md:text-4xl mx-4">
              A man can´t have enough basement swang - A man can´t have enough basement swang -
            </span>
          </div>
        </div>
        <div className="absolute top-14 animate-marquee2 whitespace-nowrap">
          <span className="text-xl md:text-4xl mx-4">
            A man can´t have enough basement swang - A man can´t have enough basement swang -
          </span>
        </div>
      </div>
      <main className="h-auto justify-items-center grid md:grid-cols-3 mx-4 md:mx-8 space-x-4 md:space-x-8">
        {products.map((product: any) => {
          return (
            <div key={product.id} className="h-full">
              <Product
                addToCart={addToCart}
                cart={cart}
                product={product}
                setCart={setCart}
                setOpen={setOpen}
              />
            </div>
          );
        })}
        <div>
          <CartModal open={open} setOpen={setOpen}>
            <Cart cart={cart} setCart={setCart} setOpen={setOpen} />
          </CartModal>
        </div>
      </main>
      <footer className="mx-4 mt-12 md:mx-8 md:mt-14 text-right">
        <Image alt="wear everyday" src={footer} />
      </footer>
    </div>
  );
};

export default Home;
