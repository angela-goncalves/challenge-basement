import type {NextPage} from "next";
import Image from "next/image";

import Linkbar from "../components/Linkbar";
import footer from "../public/footer.svg";
import imageheader from "../public/header.svg";
import data from "../product/mock.json";
import Product from "../components/Product";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-full bg-black">
      <Linkbar />
      <Navbar />
      <header className="m-auto text-white text-center">
        <div className="max-w-full mx-4 md:mx-8">
          <Image alt="basement-supply" className="w-full h-full" src={imageheader} />
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
      <footer className="mx-4 mt-12 md:mx-8 md:mt-14">
        <Image alt="" src={footer} />
      </footer>
    </div>
  );
};

export default Home;
