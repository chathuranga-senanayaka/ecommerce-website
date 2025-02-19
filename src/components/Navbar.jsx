import React from "react";
import { FaUser } from "react-icons/fa";
import { IoCartSharp, IoLocateSharp } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "products", path: "/products" },
    { name: "blog", path: "/blog" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <div className="navbar max-w-[1408px] h-16 mx-auto flex items-center justify-between">
      <div className="logo text-2xl font-semibold">
        <span className="text-green-800">Green</span>Gadget
      </div>
      <ul className="nav-menu flex gap-8 items-center cursor-pointer">
        {navLinks.map((item) => (
          <li key={item.name} className="nav-link-text">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="action flex gap-4 ">
        <IoCartSharp className="text-2xl" />
        <FaUser className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
