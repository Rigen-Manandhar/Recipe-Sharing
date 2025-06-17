import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import LandingPage from './Pages/landingPage.jsx';
import SignupPage from './Pages/signupPage.jsx';
import LoginPage from './Pages/loginPage.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="login"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
