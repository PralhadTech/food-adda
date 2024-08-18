import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = (items) => {
    dispatch(clearCart(items));
  };
  return (
    <div className="flex-col p-2 mt-5">
      <ul className="container border">
        {cartItems.map((item, index) => (
          <li key={index} className=" border w-full p-2 m-2 bg-green-200">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClearCart()}
        className=" p-2 bg-red-400 mt-5 rounded"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
