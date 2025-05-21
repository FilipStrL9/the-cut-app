
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Barbers", href: "/barbers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Appointments", href: "/appointments" },
    { name: "Book", href: "/book" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-barber">
            <span className="text-barber-purple">The</span> Sharp Cut
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive(item.href)
                  ? "text-barber-purple font-medium"
                  : "text-gray-700 hover:text-barber-purple"
              } transition-colors duration-300 text-sm uppercase tracking-wide`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/book" 
            className="btn-primary text-sm uppercase tracking-wide"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-barber" />
          ) : (
            <Menu className="h-6 w-6 text-barber" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-barber-purple font-medium"
                    : "text-gray-700"
                } py-2 text-sm uppercase tracking-wide`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="btn-primary text-center text-sm uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
