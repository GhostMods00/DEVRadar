  // Necessary code to display the navigation bar and link between the pages
  import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 py-4">
          {/* Made by waleed */}
          <Link 
            to="/" 
            className={`text-white hover:text-gray-300 transition-colors ${
              location.pathname === '/' ? 'font-bold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/potential" 
            className={`text-white hover:text-gray-300 transition-colors ${
              location.pathname === '/potential' ? 'font-bold' : ''
            }`}
          >
            Potential Candidates
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;