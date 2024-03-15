import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/slice/fetchProductSlice";
import { addToCart, totalAmount } from "../store/slice/cartSlice";
import { useEffect } from "react";
import { RootState } from "../store/Store";

interface Props {
  val: fetchData;
}

const Card: React.FC<Props> = ({ val }) => {
  const cartValue = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  //* for calculating Total amount (whenever cart is changed then it's called)
  useEffect(() => {
    dispatch(totalAmount());
  }, [dispatch, cartValue.cart]);

  return (
    <div className="relative my-5 mx-auto flex h-96 w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg transition ease-in-out delay-75 hover:translate-y-1 hover:scale-105 duration-500">
      <div className="relative p-3 mt-3 flex h-48 w-full overflow-hidden">
        <img className="object-cover" src={val.image} alt="product image" />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{val.title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${val.price}
            </span>
          </p>
        </div>
        <button
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 cursor-pointer"
          onClick={() => dispatch(addToCart({ ...val, qty: 1 }))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
