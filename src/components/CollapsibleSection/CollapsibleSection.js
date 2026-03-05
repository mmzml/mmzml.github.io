// src/components/CollapsibleSection/CollapsibleSection.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./CollapsibleSection.module.css";

const CollapsibleSection = ({ title, children, defaultOpen = true, compact = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className={`${styles.section} ${compact ? styles.compactSection : ""}`}>
      <button
        className={`${styles.header} ${compact ? styles.compactHeader : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={`${styles.chevron} ${compact ? styles.compactChevron : ""}`}
        />
      </button>
      <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.contentInner}>
          <div className={`${styles.content} ${compact ? styles.compactContent : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSection;
