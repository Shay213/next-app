import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link href={url}>
      <button type="button" className={styles.button}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
