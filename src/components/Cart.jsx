import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-6 bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2 mb-6">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="p-2 bg-white shadow-sm rounded-lg border border-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleClearCart}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 mt-2 rounded-lg transition-colors duration-300 ease-in-out"
        disabled={cartItems.length === 0}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
