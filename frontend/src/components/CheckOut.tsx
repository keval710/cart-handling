import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Order Placed</div>
          <p className="text-gray-700 text-base">
            Your order has been successfully placed! Here are the details:
          </p>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-600">Order ID</div>
            <div className="text-lg font-semibold text-gray-800">
              #{Math.floor(Math.random() * 1000000)}
            </div>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100">
          <Link to={"/"}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue Shopping
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
