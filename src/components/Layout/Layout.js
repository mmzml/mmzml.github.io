// src/components/Layout/Layout.js
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Layout.module.css";
import menuStyles from "../MainMenu/MainMenu.module.css";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && window.innerWidth <= 992) {
        if (
          !event.target.closest(`.${menuStyles.mainMenu}`) &&
          !event.target.closest(`.${styles.mobileHeader}`)
        ) {
          closeMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className={styles.layout}>
      {/* Mobile-only top bar */}
      <header className={styles.mobileHeader}>
        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <span className={styles.mobileTitle}>Muhammad Muzammil</span>
        <ThemeSwitch isDark={isDark} onToggle={toggleTheme} />
      </header>

      <MainMenu
        isOpen={isMenuOpen}
        onLinkClick={closeMenu}
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />

      <div
        className={`${styles.overlay} ${
          isMenuOpen && window.innerWidth <= 992 ? styles.visible : ""
        }`}
        onClick={closeMenu}
      />

      <main
        className={`${styles.content} ${
          isMenuOpen && window.innerWidth <= 992 ? styles.menuOpen : ""
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
