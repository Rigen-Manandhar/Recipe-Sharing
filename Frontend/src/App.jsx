import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage.jsx';
import SignupPage from './Pages/signupPage.jsx';
import LoginPage from './Pages/loginPage.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
