// src/layouts/AuthLayout.jsx

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
