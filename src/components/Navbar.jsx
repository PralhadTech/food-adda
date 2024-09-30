import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-slate-900 text-white flex justify-between items-center px-6 py-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold tracking-wider">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Food-Adda
          </Link>
        </h1>
        <div className="text-green-400 text-sm">
          {isOnline ? "✅ Online" : "🔴 Offline"}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Login
        </Link>
        <Link
          to="/cart"
          className="relative flex items-center hover:text-yellow-400 transition-colors duration-300"
        >
          <AddShoppingCartIcon className="text-yellow-500" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center space-x-4">
        <button
          onClick={toggleMobileMenu}
          className="text-yellow-500 focus:outline-none"
        >
          ☰
        </button>
        <Link
          to="/cart"
          className="relative flex items-center hover:text-yellow-400 transition-colors duration-300"
        >
          <AddShoppingCartIcon className="text-yellow-500" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-slate-900 text-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
