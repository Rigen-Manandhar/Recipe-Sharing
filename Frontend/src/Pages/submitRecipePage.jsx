import NavBar from '../Components/navBar';
import Footer from '../Components/footer';
import { useTheme } from '../context/Theme/useTheme';
import RecipeCardForm from '../Components/recipeCardForm';
const SubmitRecipe = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>
      <NavBar />
      <RecipeCardForm />
    </div>
  );
};
export default SubmitRecipe;
