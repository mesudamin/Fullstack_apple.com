import { useState } from "react";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>  
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              onClick={toggleNav}
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              {isNavOpen ? "✕" : "☰"}
            </button>
            <Link className="navbar-brand mx-auto" to="/" onClick={closeNav}>
              <img src={logo} alt="Apple" />
            </Link>

            <div className={`navbar-collapse collapse ${isNavOpen ? "show" : ""}`}>
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="mac" onClick={closeNav}>
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="iphone" onClick={closeNav}>
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="ipad" onClick={closeNav}>
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="watch" onClick={closeNav}>
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="tv" onClick={closeNav}>
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="Music" onClick={closeNav}>
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="Support" onClick={closeNav}>
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="search" onClick={closeNav}>
                    <img src={search} alt="search" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="cart" onClick={closeNav}>
                    <img src={cart} alt="cart" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
