const Featured = () => {

    return(<>
        
    <div className="flex flex-col p-5 mt-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-pacifico font-bold mb-10 text-center">
        Featured
      </h1>

      <div className="relative w-full flex justify-center items-center">
        <div className="flex gap-12">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[40vh] h-64 rounded-xl object-cover shadow-lg cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[40vh] h-64 rounded-xl object-cover shadow-lg cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[40vh] h-64 rounded-xl object-cover shadow-lg cursor-pointer"
          />
        </div>

        <button className="absolute left-60 text-3xl text-white bg-gray-700 opacity-80 w-10 h-16 rounded-xl cursor-pointer">
          ‹
        </button>

        <button className="absolute right-60 text-3xl text-white bg-gray-700 opacity-80 w-10 h-16 rounded-xl cursor-pointer">
          ›
        </button>
      </div>
    </div>
  );
        
    
    </>)

}
export default Featured