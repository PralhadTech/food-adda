import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  return (
    <header className=" bg-slate-200 flex justify-between p-2 center h-12">
      <h1>Food-Adda</h1>
      <nav className="text-center flex">
        <ul className="flex gap-6 p-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <AddShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
