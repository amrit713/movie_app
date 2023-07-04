"use client";
import { FC, useEffect } from "react";
import { Search } from "lucide-react";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navList = [
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "Series",
    link: "/series",
  },
  {
    name: "Anime",
    link: "/anime",
  },
  {
    name: "Cartoon",
    link: "/cartoon",
  },
];

interface nav {
  name: string;
  link: string;
}

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const openSearch = () => {
    setIsSearch(true);
  };

  const closeSearch = () => {
    setIsSearch(false);
  };

  return (
    <nav className="  px-[40px] py-6 border-b border-b-gray-700">
      <div className="max-w-[1720px] m-auto flex justify-between items-center">
        {/* right */}

        <h1 className="cursor-pointer whitespace-nowrap">
          <span className="text-primary">Movie</span> App
        </h1>

        {/* mid */}
        <div className="hidden md:block">
          <ul className="flex gap-6 lg:gap-10 mx-4">
            {navList.map((nav: nav) => (
              <li
                key={nav.link}
                className=" cursor-pointer hover:text-primary hover:border-b border-b-primary duration-300 ease-in-out"
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </div>

        {/* left */}

        <div
          className={`absolute z-10 right-4 left-4 duration-[.5s] ease-linear md:static ${
            isSearch ? "top-6 " : "top-[-100px]"
          } `}
        >
          <div className="flex gap-2 items-center ">
            <div className="flex gap-2 items-center bg-background_light p-2   rounded border border-gray-700 w-full">
              <Search size={20} className="text-gray-300" />

              <input
                type="search"
                className="bg-transparent focus:outline-none text-text-gray-300 placeholder:text-left placeholder:text-gray-300 caret-primary w-full"
                placeholder="Search "
              />
            </div>
            <button
              className="btn bg-primary text-white hover:bg-primary_dark"
              onClick={closeSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className={`p-2 bg-primary hover:bg-primary_dark duration-300 mx-8 ease-linear rounded-full ${
              isSearch ? "opacity-0" : "opacity-100 "
            } `}
            onClick={openSearch}
          >
            <Search size={20} className="text-gray-300" />
          </button>

          <div className="flex items-center justify-center">
            <Menu
              size={28}
              className={`absolute hover:text-primary cursor-pointer rounded-full hover:bg-background_light h-9 w-9 p-1 duration-300 ease-linear ${
                !isOpen ? "" : "hidden"
              }`}
              onClick={openNav}
            />

            <X
              size={28}
              className={`absolute hover:text-primary cursor-pointer rounded-full hover:bg-background_light h-9 w-9 p-1 duration-300 ease-linear ${
                isOpen ? "" : "hidden rotate-90 "
              }`}
              onClick={closeNav}
            />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
            }}
            className="md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center  mt-8">
              {navList.map((nav: nav) => (
                <li
                  key={nav.link}
                  className=" cursor-pointer p-2 rounded hover:text-primary hover:bg-background_light border-b-primary duration-300 ease-in-out"
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
