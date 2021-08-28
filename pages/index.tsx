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
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const productData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();

      setList(data);
    };

    productData();
  }, []);
  const add = () => {
    setCounter(counter + 1);
  };
  const less = () => {
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

  //verificar si se repiten los productos. Si se repiten agregar al counter la cantidad de veces
  //al abrir el modal se deben ver los productos con el counter modificado (si se repiten)
  //el nuevo counter (que tiene los que se repetien y los que no) se incorpora en setList

  //cartList es una función que se ejecuta cuando se clickea el botón del cart en el navbar

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
        {getList.map((product: any) => {
          const {title, image, id, price, description} = product;

          return (
            <div key={id} className="h-full">
              <Product
                counter={counter}
                description={description}
                image={image}
                price={price}
                setCart={setCart}
                setOpen={setOpen}
                title={title}
              />
            </div>
          );
        })}
        <div>
          <CartModal open={open} setOpen={setOpen}>
            <Cart
              add={add}
              cart={cart}
              counter={counter}
              less={less}
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
