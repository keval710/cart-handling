import { useEffect, useState } from "react";
import productImg from "/business_10188574.png";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { cartCount } from "../store/slice/cartSlice";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    dispatch(cartCount());
  }, [cart.cart, cart.cartCount, dispatch]);

  return (
    <>
      <nav className="sticky top-0 z-10 h-20 border-gray-200 bg-slate-300 shadow-lg">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="inline-flex gap-2">
            <img src={productImg} width={50} className="ml-7 mb-4" />{" "}
            <span className="mt-3 text-xl">Products</span>
          </div>
          <div className="mb-4 mr-10 cursor-pointer">
            <button type="button" onClick={handleCartOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 0 24 24"
                width="36px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" />
              </svg>
              <span className="absolute top-4 rounded-full bg-red-600 text-white w-5 h-5 top right-12 p-0 m-0 font-mono text-sm text-center">
                {cart.cartCount}
              </span>
            </button>
          </div>
        </div>
      </nav>
      {isCartOpen ? <Cart handleCartOpen={handleCartOpen} /> : <></>}
    </>
  );
};

export default NavBar;
