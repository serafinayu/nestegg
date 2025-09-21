import React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link href="/"><Image className="" /></Link>
        <Link href="/"><img src="/logo.png" alt="nestegg logo" className={styles.img}/></Link>
        <nav className=''>
            <Link href="/">HOME</Link>
            <Link href="/mortgage">MORTGAGE</Link>
            <Link href="/realestate">REAL ESTATE</Link>
        </nav>
    </div>
  )
}

export default Navbar
