import Login from '../Components/login.jsx';

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};
export default LoginPage;
