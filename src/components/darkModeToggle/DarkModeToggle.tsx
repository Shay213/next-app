"use client";

import React from "react";
import styles from "./darkModeToggle.module.css";
import { useThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const themeContext = useThemeContext();
  return (
    <div className={styles.container} onClick={themeContext?.toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={
          themeContext?.mode === "light" ? { left: "2px" } : { right: "2px" }
        }
      />
    </div>
  );
};

export default DarkModeToggle;
