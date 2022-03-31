import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../../styles/Layout/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Script src="https://kit.fontawesome.com/29807f1e2a.js" />
            <Link href="mailto:maveryckmaya@gmail.com">
                <a className={styles.footerLink}>
                    {/* <Image
                        src="/github-brands.svg"
                        alt=""
                        width={100}
                        height={100}
                        className={styles.icon}
                    /> */}
                    <p>maveryckmaya@gmail.com</p>
                </a>
            </Link>
            <Link href="https://linkedin.com">
                <a className={styles.footerLink}>
                    {/* <FontAwesomeIcon
                            icon={['fas', 'linkedin']}
                            className={styles.fontAwesome}
                        /> */}
                    <p>Maveryck Maya</p>
                </a>
            </Link>
            <Link href="https://github.com">
                <a className={styles.footerLink}>
                    {/* <FontAwesomeIcon
                            icon={['fas', 'github']}
                            className={styles.fontAwesome}
                        /> */}
                    <p>M4veryck</p>
                </a>
            </Link>
        </footer>
    )
}
