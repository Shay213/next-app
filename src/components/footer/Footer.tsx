import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 coolname. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="coolname Facebook"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="coolname Instagram"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="coolname Twitter"
          width={20}
          height={20}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="coolname Youtube"
          width={20}
          height={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
