import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className="bg-white rounded-2xl shadow-lg flex w-[900px] overflow-hidden">
        
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/vr-girl.png" // replace with your actual image path
            alt="Register Visual"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
          <img src="/logo.png" alt="Logo" className="w-20 mb-6" />
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">Create Account</h1>

          <form className="w-full max-w-sm">
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Register
            </button>

            {/* Link to Login */}
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-red-500 hover:underline">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
