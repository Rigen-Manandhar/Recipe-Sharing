import Logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-5 items-center">
        {/* Left Column: Socials */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/rigen.manandhar.7">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Center Column: Branding */}
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-5xl font-pacifico">Tastemate</h1>
          <img src={Logo} alt="logo" className="object-contain w-32 h-32" />
          <div className="text-sm">© 2025 Tastemate. All rights reserved.</div>
        </div>

        {/* Right Column: Navigation */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <div className="flex flex-col space-y-2 text-lg">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Recipes
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
