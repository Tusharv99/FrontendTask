import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSun, FaMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi"; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className={`${darkMode && "dark" }`}>
      <div className="bg-white shadow-md top-0 z-50 sticky dark:bg-slate-900">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          
          {/* Navbar left side */}
          <div className="flex items-center gap-5">
            <div className="flex items-center">
              <span className="font-bold text-lg dark:text-white">P2E Pro</span>
            </div>

            <div className="hidden md:flex items-center bg-gray-100 rounded px-4 py-2">
              <CiSearch className="text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Collection, item or user" 
                className="bg-gray-100 outline-none w-full" 
              />
            </div>
          </div>

          {/* Navbar right side */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 dark:text-white">Home</a>
            <div className="relative">
              <a href="#" className="text-gray-700 dark:text-white flex items-center">
                Explore <RiArrowDropDownLine className="ml-1" />
              </a>
            </div>
            <div className="relative">
              <a href="#" className="text-gray-700 flex items-center dark:text-white">
                Create <RiArrowDropDownLine className="ml-1" />
              </a>
            </div>
            <a href="#" className="text-gray-700 flex items-center dark:text-white">
              Blog <RiArrowDropDownLine className="ml-1" />
            </a>
            <a href="#" className="text-gray-700 dark:text-white">Contact</a>

            <button className="flex items-center justify-center bg-gray-200 p-2 rounded-full mx-2" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <img src="https://r2.erweima.ai/imgcompressed/img/compressed_bd04350e7b6b57642107a49ee6a00269.webp" alt="User Avatar" className="w-6 h-6 rounded-full" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={openLoginModal}>
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleDropdown} className="text-gray-700">
              {isDropdownOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isDropdownOpen && (
          <div className="md:hidden flex flex-col items-center bg-white shadow-md sticky top-0 border-t">
            <div className="flex items-center bg-gray-100 rounded px-4 py-2 mt-2 w-full justify-center">
              <CiSearch className="text-gray-500 mr-2" />
              <input type="text" placeholder="Collection, item or user" className="bg-gray-100 outline-none w-full" />
            </div>
            <div className="py-2 space-y-2 text-center w-full">
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

              <button className="flex mx-auto items-center justify-center bg-gray-200 p-2 rounded-full mx-2" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2" onClick={openLoginModal}>
                Login
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Popup for Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-80 rounded-lg shadow h-auto p-6 bg-white dark:bg-slate-900 dark:text-white relative overflow-hidden">
            <button onClick={closeLoginModal} className="absolute top-2 right-2 text-gray-500">
              <HiX size={24} />
            </button>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h2 className="text-2xl font-medium text-slate-700">Login</h2>
              <p className="text-slate-500">Enter details below.</p>
            </div>
            <form className="w-full mt-4 space-y-3">
              <div>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300" placeholder="Username" id="username"  name="username" type="text" />
              </div>
              <div>
                <input
                  className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                  placeholder="Password" id="password"  name="password"  type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
                  <span className="text-slate-500">Remember me </span>
                </div>
                <a className="text-blue-500 font-medium hover:underline" href="#">Forgot Password</a>
              </div>
              <button className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2" id="login" name="login" type="submit">
                login
              </button>
              <p className="flex justify-center space-x-1">
                <span className="text-slate-700"> Have an account? </span>
                <a className="text-blue-500 hover:underline" href="#">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
