import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-6">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      <div className="max-w-2xl bg-gray-800 p-6 rounded">
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full p-2 rounded bg-gray-900 border border-gray-700" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full p-2 rounded bg-gray-900 border border-gray-700" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-900 border border-gray-700" rows={6} />
          </div>
          <button className="bg-red-500 px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
