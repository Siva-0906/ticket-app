import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import SelectTheatre from "../pages/SelectTheatre";
import SeatBooking from "../pages/SeatBooking";
import Payments from "../pages/Payments";
import BookingSuccess from "../pages/BookingSuccess";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Optional testing page
// import TestMovieComponents from "../pages/TestMovieComponents";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Movie Details */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Select Theatre */}
        <Route path="/movie/:id/theatres" element={<SelectTheatre />} />

        {/* Seat Selection */}
        <Route path="/movie/:id/seats" element={<SeatBooking />} />

        {/* Payments */}
        <Route path="/movie/:id/payment" element={<Payments />} />

        {/* Success Page */}
        <Route path="/movie/:id/success" element={<BookingSuccess />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Debugging page for component testing (optional) */}
        {/* <Route path="/test" element={<TestMovieComponents />} /> */}

      </Routes>
    </Router>
  );
};

export default AppRoutes;
