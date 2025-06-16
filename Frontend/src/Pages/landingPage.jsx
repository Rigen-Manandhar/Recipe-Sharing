import NavBar from '../Components/navBar.jsx';
import Hero from '../Components/hero.jsx';
import DailyRecipe from '../Components/dailyRecipe.jsx';
import Featured from "../Components/featuredRecipie's.jsx";
import SelectFew from '../Components/selectFew.jsx';
import Footer from '../Components/footer.jsx';

const Landing = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <DailyRecipe />
      <Featured />
      <SelectFew />
      <Footer />
    </>
  );
};
export default Landing;
