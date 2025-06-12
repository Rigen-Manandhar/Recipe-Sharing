import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'Categories', link: '/category' },
    { name: 'Submit Recipes', link: '/submitRecipe' },
    { name: 'Search', link: '/search' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto h-20 flex justify-between items-center px-6">
        <Link to="/">
          <img className="w-14 h-14 object-contain" src={Logo} alt="Logo" />
        </Link>

        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-lg font-medium text-black hover:text-orange-500 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="text-lg font-medium text-gray-700 hover:text-orange-500 transition duration-300"
          >
            Log In
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            to="/signup"
            className="text-lg font-medium text-white bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
