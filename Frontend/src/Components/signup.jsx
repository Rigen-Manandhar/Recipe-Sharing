import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import CSS for toastify
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        {
          username: fullName,
          email,
          password,
        }
      );

      // Optionally reset form
      setFullName('');
      setEmail('');
      setPassword('');

      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
        toast.success('Signup successful');

        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error(
          'Signup completed but no token was created, login manually'
        );
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-1/2 bg-white flex flex-col items-center py-8">
          <Link to="/">
            <img
              className="w-48 h-48 mb-8 transition-transform duration-500 hover:scale-105"
              src={Logo}
              alt="Logo"
            />
          </Link>

          <div className="w-[55vh] h-[70vh] shadow-2xl p-10 rounded-lg flex flex-col justify-start">
            <h1 className="text-5xl mb-10 text-center font-pacifico">Signup</h1>

            <form
              className="flex flex-col justify-between flex-grow"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col space-y-6">
                <div>
                  <label className="block text-lg font-medium mb-2 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-4 text-xl w-full rounded-md hover:bg-orange-600 transition duration-300"
                >
                  Create Account
                </button>

                <p className="text-md text-center mt-6">
                  Already have an account?{' '}
                  <span className="text-orange-500 cursor-pointer">
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-full"
            alt="Image"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
