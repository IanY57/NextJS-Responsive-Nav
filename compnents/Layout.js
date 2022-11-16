import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {

const [isOpen, setIsOpen] = useState(false)

const openMenu =() => setIsOpen(!isOpen)

  return (
    <>
         <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navlogo}>[BrandLogo]</Link>
          <ul className={isOpen === false ? styles.navmenu : styles.navmenu +' '+ styles.active}>
            <li className={styles.navitem}>
                <Link href="/" className={styles.navlink}
                onClick={openMenu}
                >Home</Link>
            </li>
            <li className={styles.navitem}>
              
                <Link href="/about" className={styles.navlink}
                onClick={openMenu}
                >About</Link>
       
            </li>
            <li className={styles.navitem}>
           
                <Link href="/contact" className={styles.navlink}
                onClick={openMenu}
                >Contact</Link>
      
            </li>
          </ul>
          <button className={isOpen === false ? styles.hamburger : styles.hamburger +' '+ styles.active}
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    {children}
    </>
  )
}

export default Layout