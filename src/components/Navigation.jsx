import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const link = (anchor, label) =>
    isHome ? (
      <a href={`#${anchor}`}>{label}</a>
    ) : (
      <Link to={`/#${anchor}`}>{label}</Link>
    );

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          PF
        </Link>
        <div className="nav-links">
          {link('experience', 'Experience')}
          {link('projects', 'Projects')}
          {link('articles', 'Articles')}
          {link('contact', 'Contact')}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
