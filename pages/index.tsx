import type {NextPage} from "next";
import Image from "next/image";

import imageheader from "../public/header.svg";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-full bg-black">
      <Navbar />
      <header className="m-auto text-white text-center">
        <div className="max-w-full px-4">
          <Image alt="" className="w-full h-full" src={imageheader} />
        </div>
      </header>
      <main />
    </div>
  );
};

export default Home;
