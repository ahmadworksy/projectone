import React from "react";
import cta_one_shape_1 from "../assets/Artboard11.png";
import { NavLink } from "react-router-dom";

// import d from "../../public/1x/Artboard11.png"

function navbar() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              // src="../../public/1x/Artboard11.png"
              src={cta_one_shape_1}
              className="h-8"
              alt="alnour school Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              alnour school
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
          <div
            className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex justify-center my-auto p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  href="#"
                  className="block py-2 px-3  md:p-0 md:dark:hover:text-blue-500 dark:text-white :hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  href="#"
                  className="block py-2 px-3  md:p-0 md:dark:hover:text-blue-500 dark:text-white :hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notification"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Notification
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Student
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
