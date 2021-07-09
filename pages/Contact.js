import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Links from './Links';
import Con1 from './Con1';

function Contact() {
    return (
        <div className={styles.container}>
        <Head>
          <title>Hello</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  <header className={styles.header}>
  
  <Links/>
  
  
  </header>
        <main className={styles.main}>
          <div>
          <div  className={styles.body}>
              Contact Page
          </div>
          <Con1/>
          </div>
        </main>
  
        <footer className={styles.footer}>
          <div>Footer</div>
        </footer>
      </div>
    )
  }

export default Contact
