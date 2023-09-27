"use client"
import { useEffect, useState } from "react";

import { renaissanceTransparent, smoke3, smoke4 } from "@public/assets";
import { navLinks } from "../constants";
import Image from "next/image";
import styles from "@styles/style";
import Link from "next/link";
import { getCart } from "@utils/cart";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [cartProductsSum, setCardProductsSum] = useState(0)
  useEffect(() => {
  const cart = getCart()

    setCardProductsSum(cart.length)
  },[cartProductsSum])

  return (
    <div className={`${styles.boxWidth}`}>

      <nav className="w-full flex py-3 justify-center items-center navbar z-30">

        <div className="absolute left-1/2 transform -translate-x-1/2 pt-40">
          <Image src={renaissanceTransparent} alt="hoobank" className={`w-[300px]`} />

        </div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
          <li className="pl-3 cursor-pointer">
            <div className="p-3 bg-grey rounded-full flex">
              <Link href='/cart' className="flex">
                <Image src={'/assets/cart.png'} width={30} height={30} />
                <p className="absolute rounded-full p-2 top-[55px] right-[60px] bg-green text-center pt-0 pb-0 pl-2 pr-2">{cartProductsSum}</p>
              </Link>
               
            </div>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? 'close' : "menu"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-30`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={nav.link}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;