
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iphone16ProHero from "../../images/home/iphone16pro-hero.jpg";
import iphone16Hero from "../../images/home/iphone16-hero.jpg";
import watchSeries10 from "../../images/home/watch-series10.jpg";
import macLaptop from "../../images/home/mac-laptop.jpg";
import newIpad from "../../images/home/new-ipad.jpg";
import airPods from "../../images/home/air-pods.jpg";
import appleCard from "../../images/home/apple-card.jpg";
import tvLogo from "../../images/icons/apple-tv-logo.png";
import cardLogo from "../../images/icons/apple-card-logo.png";

const tvShows = [
  {
    id: 1,
    title: "Severance",
    genre: "Thriller",
    tagline: "Every work day is a mystery.",
    bgGradient: "linear-gradient(135deg, #0b1d3a 0%, #020b18 100%)",
    badge: "14 Emmy® Nominations"
  },
  {
    id: 2,
    title: "The Morning Show",
    genre: "Drama",
    tagline: "Chaos is the new comfortable.",
    bgGradient: "linear-gradient(135deg, #2c1b18 0%, #0d0605 100%)",
    badge: "Emmy® Winner"
  },
  {
    id: 3,
    title: "Ted Lasso",
    genre: "Comedy",
    tagline: "Kindness makes a comeback.",
    bgGradient: "linear-gradient(135deg, #1b2e1b 0%, #071207 100%)",
    badge: "Emmy® Winner Best Comedy"
  },
  {
    id: 4,
    title: "Silo",
    genre: "Sci-Fi",
    tagline: "The truth will surface.",
    bgGradient: "linear-gradient(135deg, #26241b 0%, #0c0b07 100%)",
    badge: "New Season"
  },
  {
    id: 5,
    title: "Wolfs",
    genre: "Action",
    tagline: "Two lone wolves. One impossible job.",
    bgGradient: "linear-gradient(135deg, #1d1b26 0%, #08070d 100%)",
    badge: "Blockbuster Premier"
  }
];

export default function Main() {
  const [activeShowIndex, setActiveShowIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveShowIndex((prev) => (prev + 1) % tvShows.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <main className="main-apple-home">
      {/* 1. Announcement Banner */}
      <section className="apple-ribbon text-center py-3 bg-light text-dark border-bottom">
        <div className="container">
          <span className="ribbon-text small">
            Get $180–$650 in credit when you trade in iPhone 11 or higher.{" "}
            <Link to="/iphone" className="apple-link fw-semibold ms-1">
              Shop iPhone &gt;
            </Link>
          </span>
        </div>
      </section>

      {/* 2. Hero Section 1: iPhone 16 Pro */}
      <section className="hero-section hero-iphone16pro text-center text-white position-relative overflow-hidden">
        <div className="hero-content pt-5">
          <h2 className="display-3 fw-bold tracking-tight mb-1">iPhone 16 Pro</h2>
          <p className="hero-subtitle lead text-gradient-ai fs-3 fw-semibold mb-3">
            Hello, Apple Intelligence.
          </p>
          <div className="cta-group d-flex justify-content-center gap-3">
            <Link to="/iphone" className="btn btn-apple-primary">
              Learn more
            </Link>
            <Link to="/iphone" className="btn btn-apple-secondary">
              Buy
            </Link>
          </div>
        </div>
        <div className="hero-img-container mt-4">
          <img
            src={iphone16ProHero}
            alt="iPhone 16 Pro"
            className="hero-product-img img-fluid shadow-lg rounded-4"
          />
        </div>
      </section>

      {/* 3. Hero Section 2: iPhone 16 */}
      <section className="hero-section hero-iphone16 text-center text-dark position-relative bg-apple-light pt-5">
        <div className="hero-content">
          <h2 className="display-3 fw-bold tracking-tight mb-1">iPhone 16</h2>
          <p className="hero-subtitle lead text-gradient-ai fs-3 fw-semibold mb-3">
            Built for Apple Intelligence.
          </p>
          <div className="cta-group d-flex justify-content-center gap-3">
            <Link to="/iphone" className="btn btn-apple-primary">
              Learn more
            </Link>
            <Link to="/iphone" className="btn btn-apple-secondary-dark">
              Buy
            </Link>
          </div>
        </div>
        <div className="hero-img-container mt-4">
          <img
            src={iphone16Hero}
            alt="iPhone 16"
            className="hero-product-img img-fluid"
          />
        </div>
      </section>

      {/* 4. Hero Section 3: Apple Watch Series 10 */}
      <section className="hero-section hero-watch text-center text-white position-relative bg-black pt-5">
        <div className="hero-content">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <i className="fa-brands fa-apple fs-2"></i>
            <span className="fs-2 fw-bold tracking-tight">WATCH</span>
          </div>
          <p className="text-danger text-uppercase fs-6 tracking-wider fw-bold mb-1">SERIES 10</p>
          <p className="hero-subtitle fs-2 fw-semibold mb-3">Thinstant classic.</p>
          <div className="cta-group d-flex justify-content-center gap-3">
            <Link to="/watch" className="btn btn-apple-primary">
              Learn more
            </Link>
            <Link to="/watch" className="btn btn-apple-secondary">
              Buy
            </Link>
          </div>
        </div>
        <div className="hero-img-container mt-4">
          <img
            src={watchSeries10}
            alt="Apple Watch Series 10"
            className="hero-product-img img-fluid rounded-4 shadow"
          />
        </div>
      </section>

      {/* 5. 2x3 Bento Grid Showcase */}
      <section className="bento-grid-section py-3 px-2 px-md-4">
        <div className="row g-3">
          {/* Tile 1: MacBook Air M3 */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-macbook p-5 text-center text-dark bg-apple-card rounded-4 position-relative h-100 d-flex flex-column justify-content-between overflow-hidden">
              <div className="tile-content">
                <h3 className="fs-2 fw-bold mb-1">MacBook Air</h3>
                <p className="fs-5 text-secondary mb-3">Lean. Mean. M3 machine.</p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <Link to="/mac" className="btn btn-apple-primary btn-sm">Learn more</Link>
                  <Link to="/mac" className="btn btn-apple-secondary-dark btn-sm">Buy</Link>
                </div>
              </div>
              <div className="tile-img-box mt-4">
                <img src={macLaptop} alt="MacBook Air M3" className="img-fluid bento-img" />
              </div>
            </div>
          </div>

          {/* Tile 2: iPad Pro M4 */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-ipad p-5 text-center text-white bg-dark rounded-4 position-relative h-100 d-flex flex-column justify-content-between overflow-hidden">
              <div className="tile-content">
                <h3 className="fs-2 fw-bold mb-1">iPad Pro</h3>
                <p className="fs-5 text-gradient-ai mb-3">Unbelievably thin. Incredibly powerful.</p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <Link to="/ipad" className="btn btn-apple-primary btn-sm">Learn more</Link>
                  <Link to="/ipad" className="btn btn-apple-secondary btn-sm">Buy</Link>
                </div>
              </div>
              <div className="tile-img-box mt-4">
                <img src={newIpad} alt="iPad Pro" className="img-fluid bento-img rounded-3" />
              </div>
            </div>
          </div>

          {/* Tile 3: AirPods 4 */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-airpods p-5 text-center text-dark bg-apple-card rounded-4 position-relative h-100 d-flex flex-column justify-content-between overflow-hidden">
              <div className="tile-content">
                <h3 className="fs-2 fw-bold mb-1">AirPods 4</h3>
                <p className="fs-5 text-secondary mb-3">Iconic. Now supersonic. Available with Active Noise Cancellation.</p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <Link to="/music" className="btn btn-apple-primary btn-sm">Learn more</Link>
                  <Link to="/music" className="btn btn-apple-secondary-dark btn-sm">Buy</Link>
                </div>
              </div>
              <div className="tile-img-box mt-4">
                <img src={airPods} alt="AirPods 4" className="img-fluid bento-img" />
              </div>
            </div>
          </div>

          {/* Tile 4: Apple Vision Pro */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-vision p-5 text-center text-white bg-black rounded-4 position-relative h-100 d-flex flex-column justify-content-between overflow-hidden">
              <div className="tile-content">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i className="fa-brands fa-apple fs-3"></i>
                  <span className="fs-3 fw-bold tracking-tight">Vision Pro</span>
                </div>
                <p className="fs-5 text-secondary mb-3">Welcome to the era of spatial computing.</p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <Link to="/tv" className="btn btn-apple-primary btn-sm">Learn more</Link>
                  <Link to="/tv" className="btn btn-apple-secondary btn-sm">Buy</Link>
                </div>
              </div>
              <div className="tile-img-box mt-4 p-3 bg-dark rounded-4 opacity-90">
                <p className="small text-uppercase tracking-widest text-primary mb-0 fw-bold">visionOS 2</p>
                <p className="text-secondary small mb-0">Transform any room into your personal theater.</p>
              </div>
            </div>
          </div>

          {/* Tile 5: Apple Trade In */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-tradein p-5 text-center text-dark bg-apple-card rounded-4 position-relative h-100 d-flex flex-column justify-content-between">
              <div className="tile-content">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i className="fa-brands fa-apple fs-3"></i>
                  <span className="fs-3 fw-bold">Trade In</span>
                </div>
                <p className="fs-5 text-secondary mb-3">
                  Get $180–$650 in credit when you trade in iPhone 11 or higher.
                </p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <Link to="/iphone" className="btn btn-apple-primary btn-sm">Get your estimate</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tile 6: Apple Card */}
          <div className="col-12 col-md-6">
            <div className="bento-tile bento-card p-5 text-center text-dark bg-apple-card rounded-4 position-relative h-100 d-flex flex-column justify-content-between overflow-hidden">
              <div className="tile-content">
                <div className="mb-2">
                  <img src={cardLogo} alt="Apple Card" style={{ height: "32px" }} />
                </div>
                <p className="fs-5 text-secondary mb-3">
                  Get up to 3% Daily Cash back with every purchase.
                </p>
                <div className="cta-group d-flex justify-content-center gap-2">
                  <a href="#" className="btn btn-apple-primary btn-sm">Apply now</a>
                  <a href="#" className="btn btn-apple-secondary-dark btn-sm">Learn more</a>
                </div>
              </div>
              <div className="tile-img-box mt-4">
                <img src={appleCard} alt="Apple Card" className="img-fluid bento-img rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Apple TV+ Streaming Carousel */}
      <section className="tv-carousel-section py-5 bg-black text-white">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center gap-2">
              <img src={tvLogo} alt="Apple TV+" style={{ height: "30px" }} />
            </div>
            <button
              className="btn btn-outline-light btn-sm rounded-circle p-2"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label="Pause Carousel"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>

          {/* Active Show Banner */}
          <div
            className="active-show-banner p-5 rounded-4 position-relative overflow-hidden text-center text-md-start"
            style={{
              background: tvShows[activeShowIndex].bgGradient,
              minHeight: "380px",
              transition: "all 0.6s ease-in-out"
            }}
          >
            <span className="badge bg-light text-dark mb-3 px-3 py-2 uppercase fw-bold">
              {tvShows[activeShowIndex].badge}
            </span>
            <h3 className="display-4 fw-extrabold mb-2">{tvShows[activeShowIndex].title}</h3>
            <p className="fs-4 text-white-50 mb-1">{tvShows[activeShowIndex].genre}</p>
            <p className="fs-5 text-white mb-4">{tvShows[activeShowIndex].tagline}</p>
            <button className="btn btn-light btn-lg rounded-pill fw-bold px-4">
              Stream now <i className="fa-solid fa-play ms-2 small"></i>
            </button>
          </div>

          {/* Indicators */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {tvShows.map((show, idx) => (
              <button
                key={show.id}
                onClick={() => setActiveShowIndex(idx)}
                className={`carousel-dot border-0 rounded-circle ${
                  idx === activeShowIndex ? "bg-white" : "bg-secondary opacity-50"
                }`}
                style={{ width: "12px", height: "12px" }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


