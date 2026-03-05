// src/components/MainMenu/MainMenu.js
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileLines,
  faHouse,
  faFlask,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./MainMenu.module.css";

const MainMenu = ({ isOpen, onLinkClick, isDark, onThemeToggle }) => {
  const handleLinkClick = () => {
    if (window.innerWidth <= 992 && onLinkClick) {
      onLinkClick();
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
        <p>CS Specialist &middot; University of Toronto</p>
      </li>

      <li className={styles.navLabel}>
        <span>Navigation</span>
        <button
          className={styles.themeToggle}
          onClick={onThemeToggle}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
      </li>

      <li className={styles.menuItem}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={handleLinkClick}
          end
        >
          <FontAwesomeIcon icon={faHouse} className={styles.menuIcon} />
          Home
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to="/research"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faFlask} className={styles.menuIcon} />
          Projects & Research
        </NavLink>
      </li>

      <li className={styles.divider} aria-hidden="true" />

      <li className={styles.contact}>
        <div className={styles.contactGrid}>
          <a
            href="mailto:m.muzammil@mail.utoronto.ca"
            aria-label="E-mail"
            title="E-mail"
            onClick={handleLinkClick}
            className={styles.contactItem}
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span className={styles.contactLabel}>Email</span>
          </a>
          <a
            href="https://github.com/mmzml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            onClick={handleLinkClick}
            className={styles.contactItem}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span className={styles.contactLabel}>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-muzammil-150440241/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            onClick={handleLinkClick}
            className={styles.contactItem}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            <span className={styles.contactLabel}>LinkedIn</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume (PDF)"
            title="Resume"
            onClick={handleLinkClick}
            className={styles.contactItem}
          >
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
            <span className={styles.contactLabel}>Resume</span>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default MainMenu;
