/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
                <img
                className=""
                width={60}
                height={60}
                src={require("assets/img/EIES LOGO.png").default}
                alt=""
              />
          
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
       
            <ul className="flex text-blueGray-100 flex-col lg:flex-row list-none lg:ml-auto">

            <li className="flex pl-10 items-center hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <Link to="/home" className="text-white"> Home</Link>
              </li>
              <li className="flex items-center hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
               <Link to="/landing" className="text-white"> Circles</Link>
              </li>
              <li className="flex items-center hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <Link to="/landing" className="text-white"> Events</Link>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/EIESUOR"
                  target="_blank"
                >
                  <i className="text-blueGray-100 fab fa-facebook text-lg leading-lg " />
      
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/electrical-and-information-engineering-society-university-of-ruhuna/"
                  target="_blank"
                >
                  <i className="text-blueGray-100 fab fa-linkedin text-lg leading-lg " />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
