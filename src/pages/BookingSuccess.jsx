import { useLocation, useParams, Link } from "react-router-dom";
import React from "react";

const BookingSuccess = () => {
  const { id } = useParams();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);
  const seats = queryParams.get("seats")?.split(",") || [];
  const total = queryParams.get("total") || 0;

  return (
    <div className="bg-black min-h-screen text-white p-6 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-4 text-green-400">Booking Confirmed!</h1>

      <p className="text-gray-300 mb-8 text-center max-w-md">
        Your tickets are successfully booked.  
        Show this QR code at the theatre entrance.
      </p>

      {/* QR Code Placeholder */}
      <div className="bg-white p-4 rounded-lg shadow-xl mb-6">
        <div className="w-40 h-40 bg-gray-300 flex items-center justify-center text-black font-semibold">
          QR CODE
        </div>
      </div>

      {/* Ticket Summary Card */}
      <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Ticket Details</h2>

        <p className="mb-2 text-gray-300">
          Movie ID: <span className="text-white">{id}</span>
        </p>

        <p className="mb-2 text-gray-300">
          Seats: <span className="text-white">{seats.join(", ")}</span>
        </p>

        <p className="mb-2 text-gray-300">
          Total Paid: <span className="text-green-400 font-semibold">₹{total}</span>
        </p>

        <p className="text-gray-400 mt-4 text-sm">
          Please arrive 15 minutes before the showtime.
        </p>
      </div>

      {/* Back Home */}
      <Link
        to="/"
        className="bg-red-600 px-8 py-3 rounded-xl hover:bg-red-700 transition font-semibold"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default BookingSuccess;
