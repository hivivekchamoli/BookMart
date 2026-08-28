import React, { useEffect, useState } from "react";
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  const element = document.documentElement;

  // Theme handling
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/course">Course</a>
      </li>

      <li>
        <a href="/contact">Contact</a>
      </li>

      <li>
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <>
      {/* Main Navbar */}
      <div className="sticky top-0 left-0 right-0 w-full h-20 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
        <div className="navbar w-full h-20 px-4 md:px-10 lg:px-20">

          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>

            <a className="text-2xl font-bold cursor-pointer">
              BookStore
            </a>
          </div>

          <div className="navbar-end space-x-3 pr-2 md:pr-0">

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>

            {/* Search */}
            <div className="hidden md:block">
              <label className="input outline-none px-3 py-2 border rounded-md bg-base-100 text-base-content">
                <svg
                  className="h-[1em] opacity-50 text-base-content"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </g>
                </svg>

                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="bg-transparent text-base-content placeholder:text-base-content/50"
                />
              </label>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
              />

              {/* Sun */}
              <svg
                className="swap-off h-7 w-7 fill-none stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3V4
                     M12 20V21
                     M4.22 4.22L4.93 4.93
                     M19.07 19.07L19.78 19.78
                     M3 12H4
                     M20 12H21
                     M4.22 19.78L4.93 19.07
                     M19.07 4.93L19.78 4.22
                     M17.5 12A5.5 5.5 0 1 1 6.5 12A5.5 5.5 0 0 1 17.5 12Z"
                />
              </svg>

              {/* Moon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* Login */}
            <div>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>

              <Login />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;