// src/layouts/MainLayout.jsx

// Optional: import Navbar and Footer if you create them
 import Navbar from "../components/common/Navbar";
 import Footer from "../components/common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-20 pb-10 px-4 max-w-6xl mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
