const SelectFew = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 mt-30 mb-10">
        <div className="relative border-2 w-88 h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" cursor-pointer hover:brightness-75 transition duration-500 ease-in-out h-full w-full object-cover"
          />
          <button className="cursor-pointer absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-16  bg-orange-500 font-pacifico text-xl hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Breakfast
          </button>
        </div>

        <div className="relative w-88 h-[600px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1690489323642-6e057faf3c7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="cursor-pointer hover:brightness-75 transition duration-500 ease-in-out h-full w-full object-cover"
          />
          <button className="cursor-pointer absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-16  bg-orange-500 font-pacifico text-xl hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Salad
          </button>
        </div>

        <div className="relative w-88 h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1598839950984-034f6dc7b495?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="cursor-pointer hover:brightness-75 transition duration-500 ease-in-out h-full w-full object-cover"
          />
          <button className="cursor-pointer absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-16  bg-orange-500 font-pacifico text-xl hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Dessert
          </button>
        </div>

        <div className="relative w-88 h-[600px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1669150852115-38eb25f072e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="cursor-pointer hover:brightness-75 transition duration-500 ease-in-out h-full w-full object-cover"
          />
          <button className="cursor-pointer absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-16  bg-orange-500 font-pacifico text-xl hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Easy to make
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectFew;
