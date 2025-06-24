import NavBar from '../Components/navBar.jsx';
import Hero from '../Components/hero.jsx';
import DailyRecipe from '../Components/dailyRecipe.jsx';
import Featured from "../Components/featuredRecipie's.jsx";
import SelectFew from '../Components/selectFew.jsx';
import Footer from '../Components/footer.jsx';
import { useTheme } from '../context/Theme/useTheme.js';

const Landing = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'dark' ? ' bg-gray-800' : 'bg:white'}>
      <NavBar />
      <Hero />
      <DailyRecipe />
      <Featured />
      <SelectFew />
      <Footer />
    </div>
  );
};
export default Landing;
