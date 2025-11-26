import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet as RouterOutlet,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SelectTheatre from "./pages/SelectTheatre";
import SeatBooking from "./pages/SeatBooking";
import Payments from "./pages/Payments";
import BookingSuccess from "./pages/BookingSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout for all main pages
function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <RouterOutlet />
      </main>

      <Footer />
    </div>
  );
}

// ✔✔✔ Correct Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      // Home
      { path: "/", element: <Home /> },

      // Movie details page
      { path: "/movie/:id", element: <MovieDetails /> },

      // Theatre selection
      { path: "/movie/:id/theatres", element: <SelectTheatre /> },

      // Seat booking
      { path: "/movie/:id/seats", element: <SeatBooking /> },

      // Payment
      { path: "/movie/:id/payment", element: <Payments /> },

      // Success
      { path: "/movie/:id/success", element: <BookingSuccess /> },

      // Authentication
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
