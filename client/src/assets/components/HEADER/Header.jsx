import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/logo.svg";
import searchIcon from "../../images/icons/search-icon.svg";
import cartIcon from "../../images/icons/cart.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="nav-wrapper fixed-top">
      <div className="container-fluid px-md-4">
        <nav className="apple-navbar d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link className="apple-logo-link d-flex align-items-center" to="/" aria-label="Apple">
            <img src={logo} alt="Apple Logo" className="apple-logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className={`apple-nav-list d-none d-md-flex align-items-center mb-0 list-unstyled ${menuOpen ? "show-mobile" : ""}`}>
            <li className="nav-item"><Link className="nav-link" to="/mac">Store</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/mac">Mac</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ipad">iPad</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/iphone">iPhone</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/watch">Watch</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tv">Vision</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/music">AirPods</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tv">TV & Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/music">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/support">Accessories</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
          </ul>

          {/* Actions: Search & Bag */}
          <div className="apple-nav-actions d-flex align-items-center">
            <button 
              className="btn btn-link nav-icon-btn p-0 me-3 me-md-4" 
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search"
            >
              <img src={searchIcon} alt="Search" className="nav-icon-img" />
            </button>
            <Link className="nav-icon-btn p-0 me-3 me-md-0" to="/cart" aria-label="Shopping Bag">
              <img src={cartIcon} alt="Bag" className="nav-icon-img" />
            </Link>
            {/* Mobile Toggle Button */}
            <button 
              className="d-md-none btn btn-link mobile-menu-toggle p-0 ms-3"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`hamburger-bar ${menuOpen ? "open" : ""}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="mobile-nav-drawer d-md-none">
          <ul className="list-unstyled p-4 mb-0">
            <li className="py-2 border-bottom"><Link to="/" onClick={() => setMenuOpen(false)}>Store</Link></li>
            <li className="py-2 border-bottom"><Link to="/mac" onClick={() => setMenuOpen(false)}>Mac</Link></li>
            <li className="py-2 border-bottom"><Link to="/ipad" onClick={() => setMenuOpen(false)}>iPad</Link></li>
            <li className="py-2 border-bottom"><Link to="/iphone" onClick={() => setMenuOpen(false)}>iPhone</Link></li>
            <li className="py-2 border-bottom"><Link to="/watch" onClick={() => setMenuOpen(false)}>Watch</Link></li>
            <li className="py-2 border-bottom"><Link to="/tv" onClick={() => setMenuOpen(false)}>Vision</Link></li>
            <li className="py-2 border-bottom"><Link to="/music" onClick={() => setMenuOpen(false)}>AirPods</Link></li>
            <li className="py-2 border-bottom"><Link to="/tv" onClick={() => setMenuOpen(false)}>TV & Home</Link></li>
            <li className="py-2 border-bottom"><Link to="/music" onClick={() => setMenuOpen(false)}>Entertainment</Link></li>
            <li className="py-2 border-bottom"><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
          </ul>
        </div>
      )}

      {/* Quick Search Drawer */}
      {searchOpen && (
        <div className="search-drawer p-3 bg-dark text-white border-bottom">
          <div className="container">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-0 text-secondary">
                <i className="fa-solid me-2">🔍</i>
              </span>
              <input
                type="text"
                className="form-control bg-transparent text-white border-0 shadow-none"
                placeholder="Search apple.com or help topics"
                autoFocus
              />
              <button 
                className="btn btn-sm btn-outline-light ms-2"
                onClick={() => setSearchOpen(false)}
              >
                Cancel
              </button>
            </div>
            <div className="quick-links mt-3 text-secondary small">
              <span className="me-3 text-uppercase fw-bold opacity-75">Quick Links:</span>
              <Link to="/iphone" className="text-secondary text-decoration-none me-3 hover-white">iPhone 16 Pro</Link>
              <Link to="/mac" className="text-secondary text-decoration-none me-3 hover-white">MacBook Air M3</Link>
              <Link to="/watch" className="text-secondary text-decoration-none me-3 hover-white">Apple Watch Series 10</Link>
              <Link to="/tv" className="text-secondary text-decoration-none hover-white">Apple Vision Pro</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

