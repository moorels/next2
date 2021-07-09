import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Links() {
    return (
        <div  className={styles.header}>
            <Link href="/">HOME</Link>
            <Link href="/">ABOUT</Link>
            <Link href="/">SERVICES</Link>
            <Link href="/">CONTACT</Link>
        </div>
    )
}

export default Links
