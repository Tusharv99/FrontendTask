import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">P2E Pro</span>
          </div>
          <div className="hidden md:flex items-center bg-gray-100 rounded px-4 py-2">
            <i className="text-gray-500 mr-0"></i><CiSearch />
            <input type="text" placeholder="Collection, item or user" className="bg-gray-100 outline-none" />
          </div>
        </div>

        {/* desktop nav links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700">Home</a>
          <div className="relative">
            <a href="#" className="text-gray-700 flex items-center">
              Explore <RiArrowDropDownLine className="ml-1" />
            </a>
          </div>
          <div className="relative">
            <a href="#" className="text-gray-700 flex items-center">
              Create <RiArrowDropDownLine className="ml-1" />
            </a>
          </div>
          <a href="#" className="text-gray-700 flex items-center">
            Blog <RiArrowDropDownLine className="ml-1" />
          </a>
          <a href="#" className="text-gray-700">Contact</a>
          <div className="flex items-center justify-center bg-gray-200 p-2 rounded-full">
            <FaSun className="text-gray-700" />
            <FaMoon className="text-gray-700 ml-2" />
          </div>
          <img src="https://r2.erweima.ai/imgcompressed/img/compressed_bd04350e7b6b57642107a49ee6a00269.webp" alt="User Avatar" className="w-6 h-6 rounded-full" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>

        {/* mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-gray-700">
            {isDropdownOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md border-t">
          <div className="flex items-center bg-gray-100 rounded px-4 py-2 mt-2 w-full justify-center">
            <i className="fas fa-search text-gray-500 mr-2"></i>
            <input type="text" placeholder="Collection, item or user" className="bg-gray-100 outline-none w-full" />
          </div>
          <div className="py-2 space-y-2 text-center">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700 flex justify-center items-center">
              Explore <RiArrowDropDownLine className="ml-1" />
            </a>
            <a href="#" className="block text-gray-700 flex justify-center items-center">
              Create <RiArrowDropDownLine className="ml-1" />
            </a>
            <a href="#" className="block text-gray-700 flex justify-center items-center">
              Blog <RiArrowDropDownLine className="ml-1" />
            </a>
            <a href="#" className="block text-gray-700">Contact</a>
            <div className="flex justify-center items-center bg-gray-200 p-2 rounded-full w-12 mt-2 mx-auto">
              <FaSun className="text-gray-700" />
              <FaMoon className="text-gray-700 ml-2" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
