import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import { Add, Delete, RemoveCircleOutlineOutlined } from "@mui/icons-material";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleIncreaseItem = (id) => {
    dispatch(increaseQuantity(id));
  };
  const HandledecreaseItem = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-6 bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className=" p-2">
          {cartItems.map((item, id) => (
            <div className="flex justify-between" key={id}>
              <li className="p-2 mt-2 w-full mr-2 bg-white shadow-sm rounded-lg border border-gray-200">
                {item?.card?.info?.name} Price -{" "}
                {isNaN(item.card.info.price / 100)
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
                {console.log(item)}
              </li>
              <button
                onClick={() => handleRemoveItem(id)}
                className=" text-red-400 hover:text-red-600 bg-white shadow-sm border rounded p-2 mt-2"
              >
                <Delete />
              </button>
              <button onClick={() => HandledecreaseItem(id)}>
                <RemoveCircleOutlineOutlined />
              </button>

              <button
                onClick={() => handleIncreaseItem(item.id)}
                className="text-white bg-green-400 p-2 mt2"
              >
                <Add />
              </button>
            </div>
          ))}
        </ul>
      )}

      <h1>Total Bill: {}</h1>
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
