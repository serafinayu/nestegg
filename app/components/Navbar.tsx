"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image
          className="styles/img"
          src="/logo.png"
          width={150}
          height={150}
          alt=""
        />
      </Link>
      <nav className={styles.navlinkContainer}>
        <Link href="/" className="raleway-font-medium">
          HOME
        </Link>
        <Link href="/mortgage" className="raleway-font-medium">
          MORTGAGE
        </Link>
        <Link href="/realestate" className="raleway-font-medium">
          REAL ESTATE
        </Link>
      </nav>
      <i
        className={`${styles.mobileNavMenu} bi bi-list`}
        onClick={() => setVisible(true)}
      ></i>

      {/* Navbar for Mobile Devices (under 480px) */}
      <div
        className={visible ? styles.mobileNavBar : "hidden"}
        onClick={() => setVisible(false)}
      >
        <i className={`${styles.mobileNavlink} bi bi-arrow-right`}></i>
        <hr />
        <Link
          href="/"
          className={`${styles.mobileNavlink} raleway-font-medium`}
        >
          HOME
        </Link>
        <hr />
        <Link
          href="/mortgage"
          className={`${styles.mobileNavlink} raleway-font-medium`}
        >
          MORTGAGE
        </Link>
        <hr />
        <Link
          href="/realestate"
          className={`${styles.mobileNavlink} raleway-font-medium`}
        >
          REAL ESTATE
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
