import React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link href="/"><Image className="styles/img" src="/logo.png" width={150} height={150} alt=""/></Link>
        {/* <Link href="/"><img src="/logo.png" alt="nestegg logo" className={styles.img}/></Link> */}
        <nav className={styles.navlinkContainer}>
            <Link href="/" className="raleway-font-medium">HOME</Link>
            <Link href="/mortgage" className="raleway-font-medium">MORTGAGE</Link>
            <Link href="/realestate" className="raleway-font-medium">REAL ESTATE</Link>
        </nav>
    </div>
  )
}

export default Navbar
