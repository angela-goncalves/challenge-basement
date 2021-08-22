import type {NextPage} from "next";
import Image from "next/image";

import footer from "../public/footer.svg";
import imageheader from "../public/header.svg";
import data from "../product/mock.json";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
const Home: NextPage = () => {
  return (
    <div className="h-full bg-black">
      <Navbar />
      <header className="m-auto text-white text-center">
        <div className="mx-4 md:m-0">
          <Image alt="basement-supply" src={imageheader} />
        </div>
      </header>
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
