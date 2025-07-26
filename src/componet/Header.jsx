import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-transform duration-500 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
          px-4 py-2  flex items-center justify-between`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <span className="text-2xl font-bold text-gray-700">TIAN</span> */}
        <img src="/images/logo.avif" className="w-28 mt-3 ml-3"/>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        <Dropdown label="HOME" />
        <Dropdown label="SHOP" badge="SALE" />
        <span className="cursor-pointer">PRODUCTS</span>
        <span className="cursor-pointer">BLOGS</span>
        <Dropdown label="PAGES" />
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4 text-gray-700">
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <FaHeart className="cursor-pointer" />
        <div className="bg-pink-500 text-white px-3 py-1 text-sm rounded">
          (0)
        </div>
        <FaShoppingBag className="cursor-pointer" />
        <div className="bg-pink-500 text-white px-3 py-1 text-sm rounded">
          (0)$0
        </div>
      </div>
    </header>
  );
}

function Dropdown({ label, badge }) {
  return (
    <div className="relative group cursor-pointer">
      <span className="flex items-center gap-1">
        {label}
        {badge && (
          <span className="text-xs bg-green-700 text-white px-1 rounded">
            {badge}
          </span>
        )}
        <svg
          className="w-3 h-3 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </span>
      <div className="absolute hidden group-hover:block bg-white text-black shadow-md p-2 rounded mt-2 min-w-[120px]">
        <span className="block py-1 hover:text-pink-500">Option 1</span>
        <span className="block py-1 hover:text-pink-500">Option 2</span>
      </div>
    </div>
  );
}
