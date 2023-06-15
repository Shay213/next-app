"use client";

import React from "react";
import styles from "./page.module.css";

const Logout = () => {
  return (
    <button className={styles.logout} onClick={() => console.log("logged out")}>
      Logout
    </button>
  );
};

export default Logout;
