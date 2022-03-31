import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Layout/Navbar.module.scss'

export default function Navbar({ navOn, toggleNav }) {
    return (
        <nav className={`${styles.nav} ${navOn && styles.navOpen}`}>
            <ul className={styles.navList}>
                <li>
                    <Link href="/">
                        <a className={styles.navLink} onClick={toggleNav}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#about">
                        <a className={styles.navLink} onClick={toggleNav}>
                            About me
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <a className={styles.navLink} onClick={toggleNav}>
                            Projects
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={styles.navLink} onClick={toggleNav}>
                            Contact me
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
