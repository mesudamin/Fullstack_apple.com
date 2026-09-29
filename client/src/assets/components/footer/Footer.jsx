import { useState } from "react";
import { Link } from "react-router-dom";
import flag from "../../images/icons/16.png";
import "./Footer.css";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const isExpanded = (sectionKey) => !!expandedSections[sectionKey];

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Upper Legal & Trade-In Disclaimer */}
        <div className="upper-text-container">
          <p>
            1. Trade‑in values vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. In‑store trade‑in requires presentation of a valid photo ID.
          </p>
          <p>
            2. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as part of an iOS 18 update. Additional features and languages will be rolling out over the coming year.
          </p>
          <p>
            3. Apple TV+ is $9.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Terms apply.
          </p>
        </div>

        {/* Main Footer Column Links */}
        <div className="footer-links-wrapper row">
          {/* Column 1: Shop & Learn */}
          <div className="links-wrapper-1 col-sm-12 col-md">
            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("shopAndLearn")}
              >
                Shop and Learn
                <span className={`accordion-icon ${isExpanded("shopAndLearn") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("shopAndLearn") ? "expanded" : ""}`}>
                <li><Link to="/Mac">Mac</Link></li>
                <li><Link to="/Ipad">iPad</Link></li>
                <li><Link to="/Iphone">iPhone</Link></li>
                <li><Link to="/Watch">Watch</Link></li>
                <li><Link to="/Tv">TV</Link></li>
                <li><Link to="/Music">Music</Link></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">HomePod</a></li>
                <li><a href="#">iPod touch</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Services & Account */}
          <div className="links-wrapper-2 col-sm-12 col-md">
            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("services")}
              >
                Services
                <span className={`accordion-icon ${isExpanded("services") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("services") ? "expanded" : ""}`}>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple News+</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Card</a></li>
                <li><a href="#">iCloud</a></li>
              </ul>
            </div>

            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("account")}
              >
                Account
                <span className={`accordion-icon ${isExpanded("account") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("account") ? "expanded" : ""}`}>
                <li><a href="#">Manage Your Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
                <li><a href="#">iCloud.com</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Apple Store */}
          <div className="links-wrapper-3 col-sm-12 col-md">
            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("appleStore")}
              >
                Apple Store
                <span className={`accordion-icon ${isExpanded("appleStore") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("appleStore") ? "expanded" : ""}`}>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Today at Apple</a></li>
                <li><a href="#">Apple Camp</a></li>
                <li><a href="#">Field Trip</a></li>
                <li><a href="#">Apple Store App</a></li>
                <li><a href="#">Refurbished and Clearance</a></li>
                <li><a href="#">Financing</a></li>
                <li><a href="#">Apple Trade In</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Shopping Help</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Business, Education, Healthcare, Government */}
          <div className="links-wrapper-4 col-sm-12 col-md">
            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("forBusiness")}
              >
                For Business
                <span className={`accordion-icon ${isExpanded("forBusiness") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("forBusiness") ? "expanded" : ""}`}>
                <li><a href="#">Apple and Business</a></li>
                <li><a href="#">Shop for Business</a></li>
              </ul>
            </div>

            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("forEducation")}
              >
                For Education
                <span className={`accordion-icon ${isExpanded("forEducation") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("forEducation") ? "expanded" : ""}`}>
                <li><a href="#">Apple and Education</a></li>
                <li><a href="#">Shop for College</a></li>
              </ul>
            </div>

            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("forHealthcare")}
              >
                For Healthcare
                <span className={`accordion-icon ${isExpanded("forHealthcare") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("forHealthcare") ? "expanded" : ""}`}>
                <li><a href="#">Apple in Healthcare</a></li>
                <li><a href="#">Health on Apple Watch</a></li>
              </ul>
            </div>

            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("forGovernment")}
              >
                For Government
                <span className={`accordion-icon ${isExpanded("forGovernment") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("forGovernment") ? "expanded" : ""}`}>
                <li><a href="#">Apple and Government</a></li>
                <li><a href="#">Shop for Veterans and Military</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Apple Values & About Apple */}
          <div className="links-wrapper-5 col-sm-12 col-md">
            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("appleValues")}
              >
                Apple Values
                <span className={`accordion-icon ${isExpanded("appleValues") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("appleValues") ? "expanded" : ""}`}>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Environment</a></li>
                <li><a href="#">Inclusion and Diversity</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Supply Chain</a></li>
              </ul>
            </div>

            <div className="footer-column-section">
              <h3
                className="footer-column-header"
                onClick={() => toggleSection("aboutApple")}
              >
                About Apple
                <span className={`accordion-icon ${isExpanded("aboutApple") ? "open" : ""}`}>
                  +
                </span>
              </h3>
              <ul className={`footer-links-list ${isExpanded("aboutApple") ? "expanded" : ""}`}>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Apple Leadership</a></li>
                <li><a href="#">Career Opportunities</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">Ethics & Compliance</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* My Apple Shopping Info Banner */}
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        {/* Copyright & Legal Links Bar */}
        <div className="copyright-wrapper">
          <div className="copyright-text">
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          <div className="footer-country">
            <div className="flag-wrapper">
              <img src={flag} alt="US Flag" />
            </div>
            <span className="footer-country-name">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
