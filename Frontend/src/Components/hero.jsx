const Hero = () => {
  return (
    <div className="w-full h-[75vh] relative flex justify-center items-center">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Image"
      />

      <h1 className="absolute text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-shadow-lg font-pacifico top-1/3 cursor-pointer transition duration-500 transform hover:scale-150  ease-in-out">
        Cook.Share.Inspire
      </h1>

      <button className="text-white absolute w-[150px] sm:w-[180px] md:w-[200px] h-12 sm:h-14 md:h-16 bg-orange-500 text-lg sm:text-xl md:text-2xl font-pacifico font-bold box-shadow-lg text-shadow-lg cursor-pointer hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out top-2/3">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
