import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Layout/Header.module.scss'
import { useState, useEffect } from 'react'
import Navbar from './navbar'

export default function Header() {
    const [navOn, setNavOn] = useState(false)

    const toggleNav = () => {
        if (window.innerWidth < 900) {
            setNavOn(prev => !prev)
            return
        }
        setNavOn(false)
    }

    useEffect(() => {
        if (navOn) {
            document.body.style.overflowY = 'hidden'
            document.documentElement.style.overflowY = 'hidden'
            return
        }
        document.body.style.overflowY = 'initial'
        document.documentElement.style.overflowY = 'initial'
    }, [navOn])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 900) {
                setNavOn(false)
            }
        })

        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth >= 900) {
                    setNavOn(false)
                }
            })
        }
    }, [])

    return (
        <header className={styles['header']} id="header">
            <Link href="/">
                <a className={styles['logo--link']}>
                    <Image
                        src="/logos/demo-MMaveryck.svg"
                        alt=""
                        width={180}
                        height={50}
                        className={styles['logo']}
                    />
                    <span className={styles['assistive-text']}>
                        Website Icon. Go to home page
                    </span>
                </a>
            </Link>
            <button
                className={styles['toggle-nav']}
                aria-label="toggle navigation"
                onClick={toggleNav}
            >
                <span
                    className={`${styles['hamburger']} ${
                        navOn && styles['hamburger-clicked']
                    }`}
                ></span>
            </button>
            <Navbar navOn={navOn} toggleNav={toggleNav} />
        </header>
    )
}
