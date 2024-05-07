import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import colorLogo from "../../assets/logo/logo.png";

import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";

import { useAppSelector } from "../../hooks/reduxHooks";
import { TiShoppingCart } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const location = useLocation();
  const { darkMode, isBangla } = useContext(DarkModeContext);

  //navbar color change effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const menuItems = (
    <>
      {/*................ home dropdown menu start.............*/}
      <li className={` ${location.pathname === "/" ? "text-red-700" : ""}`}>
        <Link
          to="/"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Home"}</span>
          </div>
        </Link>
      </li>
      <li className={` ${location.pathname === "/shop" ? "text-red-700" : ""}`}>
        <Link
          to="/shop"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Shop"}</span>
          </div>
        </Link>
      </li>
      <li
        className={` ${
          location.pathname === "/category" ? "text-red-700" : ""
        }`}
      >
        <Link
          to="/category"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Category"}</span>
          </div>
        </Link>
      </li>
      <li
        className={` ${location.pathname === "/aboutus" ? "text-red-700" : ""}`}
      >
        <Link
          to="/aboutus"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "About Us"}</span>
          </div>
        </Link>
      </li>
      <li
        className={` ${
          location.pathname === "/contactus" ? "text-red-700" : ""
        }`}
      >
        <Link
          to="/contactus"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Contact Us"}</span>
          </div>
        </Link>
      </li>
      <li
        className={` ${
          location.pathname === "/shipping" ? "text-red-700" : ""
        }`}
      >
        <Link
          to="/shipping"
          className={`font-bold py-2  ${
            scrolled
              ? `${darkMode ? "text-white" : "text-white"}`
              : "text-regular"
          }`}
        >
          <div className="flex group cursor-pointer items-center  ">
            <span>{isBangla ? "হোম" : "Shipping & Returns"}</span>
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <section>
      <div className={`fixed top-0 z-50 w-full transition duration-500  `}>
        <div
          className={`relative flex items-center justify-between max-w-screen-2xl mx-auto py-3 ${
            scrolled
              ? `bg-gradient-backdrop dropdown-menu shadow-lg ${
                  darkMode ? "bg-gradient-backdrop" : ""
                }`
              : ""
          }`}
        >
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img
              src={colorLogo}
              alt=""
              className="w-[176px] h-[58px] pl-5 py-2"
            />
          </Link>
          <ul className="items-center nav-list hidden space-x-8 lg:flex py-4  border-b-2">
            {menuItems}
          </ul>
          <div className="pr-5 py-2">
            <Link
              to={"/"}
              className="flex items-center gap-2 text-white border rounded-[30.5px] px-2  "
            >
              <TiShoppingCart className="text-3xl" />
              <span className="text-2xl font-bold font-open_sans">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed z-50 w-full transition py-3 duration-500 lg:hidden pr-5">
        <div className="flex justify-end relative">
          <button
            className="w-10 h-6 absolute top-2 right-2 z-10 flex flex-col justify-between"
            onClick={toggleMenu}
          >
            {scrolled ? (
              <span
                className={`h-1 w-4/5 bg-brand rounded-2xl ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            )}

            {/* span two */}
            {scrolled ? (
              <span
                className={`h-1 w-4/5 bg-brand rounded-2xl ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
            )}

            {/* span one */}
            {scrolled ? (
              <span
                className={`h-1 w-4/5 bg-brand rounded-2xl ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300"
                }`}
              ></span>
            ) : (
              <span
                className={`h-1 w-4/5 bg-white rounded-2xl ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2.5 duration-300"
                    : "translate-y-0 duration-300 bg-brand"
                }`}
              ></span>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`absolute top-5 left-0 w-full pb-10 bg-secondary mt-11  overflow-y-auto  mr-3 ${
              isMenuOpen
                ? "dropdown-menu-small"
                : "-translate-x-full duration-300"
            } ${darkMode ? "bg-gradient-backdrop text-white" : ""}`}
          >
            <div className=" shadow-sm text-brand hover:text-primary">
              <nav className="">
                <ul className="space-y-4 px-4">{menuItems}</ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Navbar;
