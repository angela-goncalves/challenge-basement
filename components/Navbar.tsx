import Image from "next/image";
import React, {FC} from "react";

import logo from "../public/logo.svg";
import logomobile from "../public/logoMobile.svg";

interface NavbarProps {
  counter: number;
}

const Navbar: FC<NavbarProps> = ({counter}) => {
  return (
    <div>
      <ul className="flex justify-between m-8 items-center">
        <li className="hidden lg:block">
          <Image alt="Basement" src={logo} />
        </li>
        <li className="lg:hidden">
          <Image alt="" src={logomobile} />
        </li>
        <li className="border-2 rounded-full px-5 md:px-8 py-3 ">
          CART <span>({counter})</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
