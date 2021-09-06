import type {NextPage} from "next";
import Image from "next/image";
import React, {useEffect, useState} from "react";

import Cart from "../components/Cart";
import CartModal from "../components/CartModal";
import Linkbar from "../components/Linkbar";
import footer from "../public/footer.svg";
import imageheader from "../public/header.svg";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState(false);
  const [getList, setList] = useState([]);
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    const productData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();

      setList(data);
    };

    productData();
  }, []);

  //filtrar el Linkbar por título, y por precio
  const handleOnChange = () => {
    // const inputBar = e.target.value;
    // return getList.filter((each) => each.title.includes(inputBar));
  };
  const addToCart = ({title, description, id, image, price, counter}: any) => {
    const cartData = !!cart.find((item: any) => item.id === id);

    console.log(cartData);
    if (!cartData) {
      setCart((prev: any) => {
        return [
          ...prev,
          {
            title,
            description,
            id,
            image,
            price,
            counter,
            total: price * counter,
          },
        ];
      });
    }
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
        {getList.map((product: any) => {
          const {title, image, id, price, description} = product;

          return (
            <div key={id} className="h-full">
              <Product
                addToCart={addToCart}
                cart={cart}
                counter={counter}
                description={description}
                id={id}
                image={image}
                price={price}
                setOpen={setOpen}
                title={title}
              />
            </div>
          );
        })}
        <div>
          <CartModal open={open} setOpen={setOpen}>
            <Cart
              addToCart={addToCart}
              cart={cart}
              counter={counter}
              setCounter={setCounter}
              setList={setList}
              setOpen={setOpen}
            />
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
