const RecipeCard = ({ image, title, description, createdBy }) => {
  const imageClass =
    'w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl object-cover ';
  return (
    <>
      <div className=" bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer">
        <img src={image} alt={title} className={imageClass} />
        <div>
          <h1 className="font-semibold p-3 text-lg">{title}</h1>
          <p className="text-gray-500 text-sm ml-3 mb-5">{description}</p>
          <h2 className="ml-3 mb-5 font-normal flex">Recipe By: {createdBy}</h2>
        </div>
      </div>
    </>
  );
};
export default RecipeCard;
