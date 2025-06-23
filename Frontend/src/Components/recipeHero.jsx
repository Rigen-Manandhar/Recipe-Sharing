const RecipeHero = () => {
  return (
    <>
      <div className="w-full h-[80vh] relative ">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?_gl=1*znbic8*_ga*MTI1OTEzNTU3Ni4xNzUwNTczMzMx*_ga_8JE65Q40S6*czE3NTA1NzMzMzEkbzEkZzEkdDE3NTA1NzMzOTUkajU5JGwwJGgw"
          alt="Recipe Picture"
        />
        <div className="absolute top-0 left-0 mt-35 ml-20 p-6 flex">
          <h1 className=" text-7xl font-sans font-bold text-white ">Pizza</h1>
        </div>
      </div>
    </>
  );
};
export default RecipeHero;
