import Link from 'next/link'
import styles from '../../styles/Layout/Navbar.module.scss'
import { NavBarContextConsumer } from '../navBarContext'

export default function Navbar({ navOn, toggleNav }) {
    const { manageClicked, currentSection } = NavBarContextConsumer()

    return (
        <nav className={`${styles['nav']} ${navOn && styles['nav-open']}`}>
            <ul className={styles['nav-list']} onClick={manageClicked}>
                <li>
                    <Link href="/">
                        <a
                            className={`${styles['nav-link']} ${
                                currentSection === '/' && styles['current']
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
                            className={`${styles['nav-link']} ${
                                currentSection === '/#about' &&
                                styles['current']
                            }`}
                            onClick={e => {
                                toggleNav()
                            }}
                        >
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects">
                        <a
                            className={`${styles['nav-link']} ${
                                currentSection === '/#projects' &&
                                styles['current']
                            }`}
                            onClick={e => {
                                toggleNav()
                            }}
                        >
                            Projects
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a
                            className={`${styles['nav-link']} ${
                                currentSection === '/contact' &&
                                styles['current']
                            }`}
                            onClick={e => {
                                toggleNav()
                            }}
                        >
                            Contact me
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
