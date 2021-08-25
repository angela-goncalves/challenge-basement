import type {NextPage} from "next";
import Image from "next/image";
import React, {useEffect, useState} from "react";

import Linkbar from "../components/Linkbar";
import footer from "../public/footer.svg";
import data from "../product/mock.json";
import imageheader from "../public/header.svg";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  const [counter, setCounter] = useState(1);
  const [productList, setList] = useState([]);

  useEffect(() => {
    const productData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();

      console.log(data);
      setList(data);
    };
  }, []);

  const addProduct = () => {
    setCounter(counter + 1);
  };
  const lessProduct = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
  };
  //filtrar el Linkbar por título, y por precio
  const handleOnChange = () => {
    // const inputBar = e.target.value;
    // return productList.filter((each) => each.title.includes(inputBar));
  };

  return (
    <div className="h-full bg-black">
      <Linkbar handleOnChange={handleOnChange} />
      <Navbar counter={counter} />
      <header className="m-auto text-white text-center">
        <div className="mx-4 md:m-0">
          <Image alt="basement-supply" src={imageheader} />
        </div>
      </header>
      <div className="border-t-2 border-b-2 mt-2  mb-12 md:mt-14 md:mb-24 ">
        <p className="text-xl  md:text-4xl">A man can´t have enough basement. swang -</p>
      </div>
      <main className="h-auto justify-items-center grid md:grid-cols-3 mx-4 md:mx-8 space-x-4 md:space-x-8">
        {data.map((product: any) => {
          const {title, image, id, price, description} = product;

          return (
            <div key={id} className="h-full">
              <Product
                addProduct={addProduct}
                counter={counter}
                description={description}
                image={image}
                lessProduct={lessProduct}
                price={price}
                productList={productList}
                setList={setList}
                title={title}
              />
            </div>
          );
        })}
      </main>
      <footer className="mx-4 mt-12 md:mx-8 md:mt-14 text-right">
        <Image alt="wear everyday" src={footer} />
      </footer>
    </div>
  );
};

export default Home;
