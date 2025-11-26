import { useLocation, useParams, Link } from "react-router-dom";
import React from "react";
const Payments = () => {
  const { id } = useParams(); // movie id
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const seats = query.get("seats")?.split(",") || [];
  const total = query.get("total") || 0;

  return (
    <div className="bg-black min-h-screen text-white p-5">

      <h1 className="text-3xl font-bold mb-6">Payment</h1>

      <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg">
        {/* Order Summary */}
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="mb-4">
          <p className="text-gray-300">
            Seats: <span className="font-semibold">{seats.join(", ")}</span>
          </p>
          <p className="text-gray-300">
            Amount: <span className="font-semibold">₹{total}</span>
          </p>
          <p className="text-gray-300 mt-2">
            Convenience Fee: <span className="font-semibold">₹20</span>
          </p>
        </div>

        <div className="w-full h-px bg-gray-700 my-4"></div>

        {/* Final Amount */}
        <p className="text-lg font-bold mb-6">
          Total Payable: <span className="text-green-400">₹{Number(total) + 20}</span>
        </p>

        {/* Payment Method */}
        <h3 className="font-semibold text-lg mb-3">Select Payment Method</h3>
        <div className="space-y-3 mb-6">
          <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg transition">
            UPI
          </button>

          <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg transition">
            Credit / Debit Card
          </button>

          <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg transition">
            Net Banking
          </button>
        </div>

        {/* Proceed Button */}
        <Link
          to={`/movie/${id}/success?seats=${seats.join(",")}&final=${Number(total) + 20}`}
          className="block text-center bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
        >
          Pay Securely
        </Link>
      </div>
    </div>
  );
};

export default Payments;
