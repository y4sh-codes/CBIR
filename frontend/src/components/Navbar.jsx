import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Image Seek
        </Link>
        
        <div className="navbar-menu">
          <Link 
            to="/upload" 
            className={`navbar-link ${location.pathname === '/upload' ? 'active' : ''}`}
          >
            Upload Image
          </Link>
          <a 
            href="#contact" 
            className="navbar-link"
            onClick={(e) => {
              if (location.pathname !== '/') {
                window.location.href = '/#contact';
              } else {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
