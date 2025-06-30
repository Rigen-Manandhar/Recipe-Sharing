import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from './Pages/landingPage.jsx';
import SignupPage from './Pages/signupPage.jsx';
import LoginPage from './Pages/loginPage.jsx';
import ConfirmBox from './Components/confirmBox.jsx';
import RecipePage from './Pages/recipePage.jsx';
import SubmitRecipe from './Pages/submitRecipePage.jsx';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="confirm" element={<ConfirmBox />} />
          <Route path="recipe" element={<RecipePage />} />
          <Route path="submitRecipe" element={<SubmitRecipe />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
