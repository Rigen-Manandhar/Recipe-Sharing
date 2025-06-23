import RecipeCard from './recipeCard.jsx';

const Featured = () => {
  const recipes = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1524237629218-0a109277890c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Loaded Hotdog',
      description: 'Classic pepperoni pizza with mozzarella cheese.',
      createdBy: 'Jane Doe',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'BBQ Ribs',
      description: 'Classic pepperoni pizza with mozzarella cheese.',
      createdBy: 'Jane Doe',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pasta',
      description: 'Classic pepperoni pizza with mozzarella cheese.',
      createdBy: 'Jane Doe',
    },
  ];

  return (
    <div className="flex flex-col p-5 mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-10 text-center">
        Featured Recipe's
      </h1>

      <div className="relative mx-auto max-w-7xl flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
              createdBy={recipe.createdBy}
            />
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

export default Featured;
