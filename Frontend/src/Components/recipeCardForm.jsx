import { useTheme } from '../context/Theme/useTheme';
const RecipeCardForm = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex justify-center items-center mt-30 w-full h-full p-5">
        <div className="relative w-full max-w-4xl">
          <div className="border-t-4 border-orange-500"></div>

          <h1
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       px-4 font-pacifico text-7xl text-orange-500 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            Recipe Card
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <label>Name of the recipe</label>
      </div>
    </>
  );
};
export default RecipeCardForm;
