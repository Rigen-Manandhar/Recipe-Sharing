const SelectFew = () => {
  const categories = [
    {
      label: 'Breakfast',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'Salad',
      image:
        'https://plus.unsplash.com/premium_photo-1690489323642-6e057faf3c7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'Dessert',
      image:
        'https://images.unsplash.com/photo-1598839950984-034f6dc7b495?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'Easy to make',
      image:
        'https://plus.unsplash.com/premium_photo-1669150852115-38eb25f072e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-[120px] mb-10 px-4">
      {categories.map((item, index) => (
        <div key={index} className="relative w-[320px] h-[500px]">
          <img
            src={item.image}
            alt={item.label}
            className="cursor-pointer hover:brightness-75 transition duration-500 ease-in-out w-full h-full object-cover rounded-xl shadow-md"
          />
          <button className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[150px] h-16 bg-orange-500 font-pacifico text-xl text-white rounded-lg shadow-lg hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectFew;
