import NavBar from '../Components/navBar';
import RecipeHero from '../Components/recipeHero';
import Ingredients from '../Components/recipeDetails';
import { useTheme } from '../context/Theme/useTheme';

const RecipePage = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>
      <NavBar />
      <RecipeHero />
      <Ingredients />
    </div>
  );
};
export default RecipePage;
