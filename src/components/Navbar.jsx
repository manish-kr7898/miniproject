import React from "react";
import "../components/Navbar.css";

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>M</span>indpixyle
            <span>T</span>ech
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <Link to="/CarouselContainer">Home</Link>
            </li>
            <li>
              <Link to="Sidebar">Services</Link>
            </li>
            <li>
              <Link to="/MyPortfolio">PortfolioLink</Link>
            </li>
            <li>
              <Link to="/Contactus">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href=" ">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href=" " target="_mp">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
            <li>
              <a href=" " target="_mp">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
