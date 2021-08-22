import type {NextPage} from "next";
import Image from "next/image";
// import React, {useState} from "react";

import Linkbar from "../components/Linkbar";
import footer from "../public/footer.svg";
import imageheader from "../public/header.svg";
import data from "../product/mock.json";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
const Home: NextPage = () => {
  // const [merchandise, setMerchandise] = useState(() => {
  //   const response = await fetch("/api/products");
  //   const data = await response.json();
  // });

  const handleOnChange = async (e: any) => {
    const inputBar = e.target.value;

    // data.filter((each) => each.include(e.target.value));
  };

  return (
    <div className="h-full bg-black">
      <Linkbar handleOnChange={handleOnChange} />
      <Navbar />
      <header className="m-auto text-white text-center">
        <div className="mx-4 md:m-0">
          <Image alt="basement-supply" src={imageheader} />
        </div>
      </header>
      <div className="border-t-2 border-b-2 mt-2  mb-12 md:mt-14 md:mb-24 ">
        <p className="text-xl  md:text-4xl">A man can´t have enough basement. swang -</p>
      </div>
      <main className="grid md:grid-cols-3 mx-4 md:mx-7 space-x-4 md:space-x-8">
        {data.map((product) => {
          const {title, image, id, price} = product;

          return (
            <div key={id}>
              <Product image={image} price={price} title={title} />
            </div>
          );
        })}
      </main>
      <Cart />
      <footer className="mx-4 mt-12 md:mx-8 md:mt-14">
        <Image alt="wear everyday" src={footer} />
      </footer>
    </div>
  );
};

export default Home;
