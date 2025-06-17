import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      toast.success(res.data.message);
      props.setIsLoggedIn(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
      console.log(props.isLoggedIn);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Try again.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full"
          alt="Image"
        />
      </div>

      {/* Left Side */}
      <div className="w-1/2 bg-white flex flex-col items-center py-8">
        <Link to="/">
          <img
            className="w-48 h-48 mb-8 transition-transform duration-500 hover:scale-105"
            src={Logo}
            alt="Logo"
          />
        </Link>

        <div className="w-[55vh] h-[60vh] shadow-2xl p-10 rounded-lg flex flex-col justify-start">
          <h1 className="text-5xl mb-10 text-center font-pacifico">Login</h1>

          <form className="flex flex-col justify-between flex-grow">
            <div className="flex flex-col space-y-6 mt-15">
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                value={props.isLoggedIn}
                onClick={handleSubmit}
                className="bg-orange-500 text-white font-semibold py-4 text-xl w-full rounded-md hover:bg-orange-600 transition duration-300"
              >
                Login
              </button>

              <p className="text-md text-center mt-6">
                Don't have an account?{' '}
                <span className="text-orange-500 cursor-pointer">
                  <Link to="/signup">SignUp</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
    </div>
  );
};

export default Login;
