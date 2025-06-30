import RecipeCard from './recipeCard'; // Make sure path is correct
import { Link } from 'react-router-dom';
import { useTheme } from '../context/Theme/useTheme';

const DailyRecipe = () => {
  const { theme } = useTheme();

  const recipes = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pepperoni Pizza',
      description: 'Classic pepperoni pizza with mozzarella cheese.',
      createdBy: 'Jane Doe',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cheeseburger',
      description: 'Juicy beef burger with cheddar and fresh veggies.',
      createdBy: 'Jane Doe',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pasta',
      description: 'Creamy Alfredo pasta with grilled chicken.',
      createdBy: 'Jane Doe',
    },
  ];

  return (
    <div className="flex flex-col p-5 mt-10">
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-pacifico font-bold mb-10 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        Daily Recipe's
      </h1>

      <div className="relative mx-auto max-w-7xl flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link to="/recipe" key={recipe.id}>
              <RecipeCard
                image={recipe.image}
                title={recipe.title}
                description={recipe.description}
                createdBy={recipe.createdBy}
              />
            </Link>
          ))}
        </div>

        <button className="absolute -left-5 text-3xl text-white bg-gray-800 opacity-90 w-10 h-16 rounded-xl cursor-pointer shadow-md transition-all hover:scale-110">
          ‹
        </button>

        <button className="absolute -right-5 text-3xl text-white bg-gray-800 opacity-90 w-10 h-16 rounded-xl cursor-pointer shadow-md transition-all hover:scale-110">
          ›
        </button>
      </div>
    </div>
  );
};

export default DailyRecipe;
