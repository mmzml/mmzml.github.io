// src/components/Layout/Layout.js
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Layout.module.css";
import menuStyles from "../MainMenu/MainMenu.module.css";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close menu if clicking outside the menu on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu and the toggle button
      if (isMenuOpen && window.innerWidth <= 992) {
        // A simple check: if the click is not inside an element with mainMenu class
        if (
          !event.target.closest(`.${menuStyles.mainMenu}`) &&
          !event.target.closest(`.${menuStyles.menuToggle}`)
        ) {
          closeMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.layout}>
      {/* Hamburger Button */}
      <button
        className={menuStyles.menuToggle}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <MainMenu isOpen={isMenuOpen} onLinkClick={closeMenu} />

      {/* Optional Overlay for mobile */}
      <div
        className={`${styles.overlay} ${
          isMenuOpen && window.innerWidth <= 992 ? styles.visible : ""
        }`}
        onClick={closeMenu} // Close menu when overlay is clicked
      ></div>

      {/* Page Content */}
      <main
        className={`${styles.content} ${
          isMenuOpen && window.innerWidth <= 992 ? styles.menuOpen : ""
        }`}
      >
        <Outlet /> {/* Renders the matched child route component */}
      </main>
    </div>
  );
};

export default Layout;
