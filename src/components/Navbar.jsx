import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Login from "./Login";

const Navbar = () => {
  const isOnline = useOnline();

  // useSlector hook to access redux store provide to App component
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="bg-slate-800 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="font-extrabold text-3xl">
        <Link to="/">Food-Adda</Link>
      </h1>
      <nav className="flex">
        <ul className="flex gap-8 text-lg">
          <li className="hover:text-yellow-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-500 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <h1>{isOnline ? "Online" : "Offline"}</h1>
          <li className="flex items-center hover:text-yellow-500 transition duration-300">
            <Link to="/login">Login</Link>
          </li>
          <li className="flex items-center hover:text-yellow-500 transition duration-300">
            <Link to="/cart">
              <AddShoppingCartIcon className="text-yellow-500" />
              {cartItems.length === 0 ? null : cartItems.length}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
