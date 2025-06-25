import { useTheme } from '../context/Theme/useTheme';

const RecipeDetails = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Ingredients Card */}
        <div
          className={`shadow-xl rounded-2xl p-8 border hover:shadow-2xl transition duration-300 ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'}`}
        >
          <h2
            className={`text-3xl font-bold mb-6 border-b pb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Ingredients
          </h2>
          <ul
            className={`space-y-4 text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700 '}`}
          >
            <li>✔️ 2 cups all-purpose flour</li>
            <li>✔️ 1 cup warm water</li>
            <li>✔️ 1 packet active dry yeast</li>
            <li>✔️ 1/2 cup tomato sauce</li>
            <li>✔️ 1 cup shredded mozzarella cheese</li>
            <li>✔️ Toppings of your choice</li>
          </ul>
        </div>

        {/* Recipe Steps Card */}
        <div
          className={`shadow-xl rounded-2xl p-8 border hover:shadow-2xl transition duration-300 ${theme === 'dark' ? 'bg-gray-600' : 'bg-white'}`}
        >
          <h2
            className={`text-3xl font-bold mb-6 border-b pb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            Instructions
          </h2>
          <ol
            className={`space-y-6 text-lg list-decimal list-inside ${theme === 'dark' ? 'text-white' : 'text-gray-700 '}`}
          >
            <li>Combine flour, yeast, and warm water to form dough.</li>
            <li>Knead the dough for 10 minutes, let rise for 1 hour.</li>
            <li>Preheat oven to 220°C (430°F).</li>
            <li>Roll out dough, spread tomato sauce evenly.</li>
            <li>Add mozzarella and toppings.</li>
            <li>Bake for 15-20 minutes until golden and crispy.</li>
            <li>Slice and enjoy your homemade pizza!</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
