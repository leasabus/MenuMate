import React, { useState } from "react";
import { IoRestaurantSharp, IoSearch } from "react-icons/io5";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

export const Navbar: React.FC = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(true);
  };
  return (
    <>
      <div className="p-6 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <span className="text-orange">
            <IoRestaurantSharp size={54} />
          </span>
          <div className="hidden md:flex flex-col items-start justify-center">
            <h1 className="font-bold text-xl">MenuMate</h1>
            <span className="text-sm text-gray font-semibold">
              Savor every bite
            </span>
          </div>
        </div>

        <div className="text-dark font-semibold md:flex flex-row gap-4 hidden ">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About Us</a>
          <a href="">Our Specials</a>
          <a href="">Our Chefs</a>
        </div>

        <div className="text-orange-dark font-semibold hidden md:flex flex-row gap-8">
          <span>
            <IoSearch size={24} />
          </span>
          <span>
            <AiOutlineShoppingCart size={24} />
          </span>
          <span>
            <AiOutlineUser size={24} />
          </span>
        </div>

        <div
          onClick={handleNav}
          className="block md:hidden p-2 cursor-pointer bg-orange-dark rounded-full"
        >
          {!nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>

        <div
          className={
            !nav
              ? " px-4 py-2 fixed left-0 top-0 w-[65%] h-[350px]  bg-orange  ease-in-out duration-500 rounded flex flex-col"
              : "fixed left-[100%]"
          }
        >
          <div onClick={() => handleClose()}>
            <div className=" mt-4 text-xl font-bold flex flex-col gap-4  ">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                Menu
              </a>
              <a href="#" className="hover:text-white">
                About Us
              </a>
              <a href="#" className="hover:text-white">
                Our Specials
              </a>
              <a href="#" className="hover:text-white">
                Our Chefs
              </a>
            </div>

            <div className=" flex flex-row gap-6 mt-16">
              <button className="text-white hover:text-dark">
                <IoSearch size={26} />
              </button>
              <button className="text-white hover:text-dark">
                <AiOutlineShoppingCart size={26} />
              </button>
              <button className="text-white hover:text-dark">
                <AiOutlineUser size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
