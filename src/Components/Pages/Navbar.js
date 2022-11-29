import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Components//Images//logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link
                  class="text-gray-600 font-bold transition hover:text-black text-[15px]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              
            </ul>
          </div>
          <a href="">
            <img className="lg:h-[80px] h-16" src={logo} alt="" />
          </a>
        </div>
        <div className="hidden lg:flex ">
          <ul class="flex items-center gap-6 ">
            <li>
              <Link
                class="text-gray-600 font-bold transition hover:text-black text-[15px]"
                to="/"
              >
                Home
              </Link>
            </li>
          
          </ul>
        </div>
        <div className="navbar-end">
          <div class="sm:flex sm:gap-4">
            <Link
              to="/contact"
              type="button"
              class="mt-2 text-white bg-gradient-to-br from-primary to-secondary hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
