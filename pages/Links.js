import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Links() {
    return (
        <div  className={styles.header}>
            <Link href="/">HOME</Link>
            <Link href="/About">ABOUT</Link>
            <Link href="/Services">SERVICES</Link>
            <Link href="/Contact">CONTACT</Link>
        </div>
    )
}

export default Links
