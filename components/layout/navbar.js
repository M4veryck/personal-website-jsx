import Link from 'next/link'
import styles from '../../styles/Layout/Navbar.module.scss'
import { NavBarContextConsumer } from '../navBarContext'

export default function Navbar({ navOn, toggleNav }) {
    const { manageClicked, currentSection } = NavBarContextConsumer()

    return (
        <nav className={`${styles.nav} ${navOn && styles.navOpen}`}>
            <ul className={styles.navList} onClick={manageClicked}>
                <li>
                    <Link href="/">
                        <a
                            className={`${styles.navLink} ${
                                currentSection === '/' && styles.current
                            }`}
                            onClick={() => {
                                manageClicked()
                                toggleNav()
                            }}
                        >
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#about">
                        <a
                            className={`${styles.navLink} ${
                                currentSection === '/#about' && styles.current
                            }`}
                            onClick={toggleNav}
                        >
                            About me
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <a
                            className={`${styles.navLink} ${
                                currentSection === '/#projects' &&
                                styles.current
                            }`}
                            onClick={toggleNav}
                        >
                            Projects
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a
                            className={`${styles.navLink} ${
                                currentSection === '/contact' && styles.current
                            }`}
                            onClick={toggleNav}
                        >
                            Contact me
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
