import { useTheme } from '../context/Theme/useTheme';

const RecipeCard = ({ image, title, description, createdBy }) => {
  const { theme } = useTheme();

  const imageClass = 'w-full h-40 sm:h-48 md:h-56 lg:h-64  object-cover ';
  return (
    <>
      <div
        className={`rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
      >
        <img src={image} alt={title} className={imageClass} />
        <div>
          <h1
            className={
              theme === 'dark'
                ? 'font-semibold p-3 text-lg text-white'
                : 'font-semibold p-3 text-lg text-black'
            }
          >
            {title}
          </h1>
          <p
            className={
              theme === 'dark'
                ? 'text-white text-sm ml-3 mb-5'
                : 'text-gray-500 text-sm ml-3 mb-5'
            }
          >
            {description}
          </p>
          <h2
            // className={`ml-3 mb-5 font-normal flex${theme === 'dark' ? 'text-white' : 'text-black'}`}
            className={
              theme === 'dark'
                ? 'ml-3 mb-5 font-normal flex text-white'
                : 'ml-3 mb-5 font-normal flex text-black'
            }
          >
            Recipe By: {createdBy}
          </h2>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
