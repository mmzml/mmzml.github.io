// src/components/MainMenu/MainMenu.js
import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./MainMenu.module.css"; // Import CSS Module

const MainMenu = ({ isOpen, onLinkClick }) => {
  // Function to handle link clicks - close menu on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 992 && onLinkClick) {
      onLinkClick(); // Call the function passed from Layout to close menu
    }
  };

  return (
    <ul className={`${styles.mainMenu} ${isOpen ? styles.open : ""}`}>
      <li className={styles.logoItem}>
        <div className={styles.logo}>
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="/images/my-headshot.jpg"
              alt="Muhammad Muzammil Headshot"
            />
          </Link>
        </div>
      </li>
      <li className={styles.navbarTitle}>
        <Link to="/" onClick={handleLinkClick}>
          Muhammad Muzammil
        </Link>
        <p>Student at the University of Toronto</p>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={handleLinkClick}
          end // Use 'end' for the home link to prevent matching '/research'
        >
          Home
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to="/research"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={handleLinkClick}
        >
          Projects & Research
        </NavLink>
      </li>
      <li className={styles.contact}>
        <p>
          <a href="mailto:m.muzammil@mail.utoronto.ca">E-mail</a> |
          <a
            href="https://github.com/mmzml"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/muhammad-muzammil-150440241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </p>
      </li>
    </ul>
  );
};

export default MainMenu;
