const RecipeHero = () => {
  return (
    <>
      <div className="w-full h-[80vh] relative ">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?_gl=1*znbic8*_ga*MTI1OTEzNTU3Ni4xNzUwNTczMzMx*_ga_8JE65Q40S6*czE3NTA1NzMzMzEkbzEkZzEkdDE3NTA1NzMzOTUkajU5JGwwJGgw"
          alt="Recipe Picture"
        />
        <div className="absolute top-0 left-0 mt-35 ml-20 p-6 flex flex-col">
          <h1 className=" text-7xl font-sans font-bold text-white ">
            Homemade Pizza
          </h1>
          <p className="text-white font-sans mt-5 text-2xl font-light">
            Created By: Jhon Doe{' '} 
          </p>

          <div className="mt-5 text-4xl">⭐⭐⭐⭐⭐</div>
          <p className="w-[600px] text-white mt-10 font-sans font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam
            nisi temporibus, praesentium rem quas voluptas! Similique expedita
            illo adipisci consequatur ex totam id itaque omnis dignissimos.
            Sapiente, quibusdam iure.
          </p>
        </div>
      </div>
    </>
  );
};
export default RecipeHero;
