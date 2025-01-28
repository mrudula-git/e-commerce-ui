import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-red shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">Shopi</Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/category/all" className="text-gray-600 hover:text-gray-900">All</Link>
              <Link to="/category/clothes" className="text-gray-600 hover:text-gray-900">Clothes</Link>
              <Link to="/category/electronics" className="text-gray-600 hover:text-gray-900">Electronics</Link>
              <Link to="/category/furniture" className="text-gray-600 hover:text-gray-900">Furniture</Link>
              <Link to="/category/toys" className="text-gray-600 hover:text-gray-900">Toys</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">user@mail.com</span>
            <Link to="/my-orders" className="text-gray-600 hover:text-gray-900">My Orders</Link>
            <Link to="/my-account" className="text-gray-600 hover:text-gray-900">My Account</Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <div className="relative">
                <FaShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
