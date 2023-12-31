import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Logout from "../logout/Logout";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const LINKS = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        coolname
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {LINKS.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
