const DailyRecipe = () => {
  const images = [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const imageClass =
    'w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl object-cover shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105';

  return (
    <div className="flex flex-col p-5 mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-pacifico font-bold mb-10 text-center">
        Daily Recipes
      </h1>

      <div className="relative mx-auto max-w-5xl flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Recipe ${index + 1}`}
              className={imageClass}
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

export default DailyRecipe;
