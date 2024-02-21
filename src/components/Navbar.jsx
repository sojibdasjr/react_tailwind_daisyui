import React, { useState } from "react";
import Link from "./Link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="text-black">
      <div onClick={handleMenu} className="md:hidden bg-slate-500 ">
        {isOpen ? (
          <IoMdClose className="text-2xl text-red-500 cursor-pointer " />
        ) : (
          <CiMenuFries className="text-2xl text-green-400 cursor-pointer" />
        )}
      </div>
      <ul
        className={`md:flex md:static absolute  bg-stone-50 px-6 shadow-lg duration-1000 ${
          isOpen ? "start-0" : "-start-40"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
