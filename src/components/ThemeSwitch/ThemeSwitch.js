// src/components/ThemeSwitch/ThemeSwitch.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = ({ isDark, onToggle }) => (
  <button
    className={`${styles.switch} ${isDark ? styles.dark : ""}`}
    onClick={onToggle}
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    <span className={styles.knob}>
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </span>
  </button>
);

export default ThemeSwitch;
