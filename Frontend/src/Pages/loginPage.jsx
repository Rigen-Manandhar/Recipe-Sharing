import React, { useState } from 'react';
import Login from '../Components/login.jsx';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};
export default LoginPage;
