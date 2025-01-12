import React, { useState } from 'react';
import backgroundImage from '../assets/backgroundImage.png';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };
  const handleMove = () =>{
    navigate('/register')
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 "></div>

      {/* Login form container */}
      <div className="relative z-10 w-[90%] max-w-md m-2 px-6 py-8 bg-white rounded-xl shadow-lg sm:px-10 sm:py-12 md:mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Login </h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-green-900 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-800 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <span className="h-5 w-5 text-gray-400">&#128065;</span> // Replace with an eye-off icon
                  ) : (
                    <span className="h-5 w-5 text-gray-400">&#128065;</span> // Replace with an eye icon
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border border-gray-900 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Sign up link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <p onClick={handleMove} className="cursor-pointer font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
