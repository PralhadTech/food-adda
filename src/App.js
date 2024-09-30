import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./components/Login";

const LazyBody = lazy(() => import("./components/Body"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="container m-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <LazyBody />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
