import { useRef } from 'react'

import styles from '../../styles/Hero/Hero.module.scss'
import useCurrentSection from '../hooks/useCurrentSection'

export default function Hero() {
    const heroRef = useRef()
    useCurrentSection(heroRef, '-50%', '/')

    return (
        <section className={styles['hero--section']} id="main" ref={heroRef}>
            <div className={styles['hero--container']}>
                <div className={styles['name-rol--container']}>
                    <h1 className={styles['name']}>
                        <span className={styles['first-name']}>Maveryck </span>
                        <br />
                        <span className={styles['last-name']}>Maya</span>
                    </h1>
                    <p className={styles['rol']}>Fullstack developer</p>
                </div>

                <div className={styles['overlap-div']}>
                    <div className={styles['ads-text--container']}>
                        <p className={styles['ads-text']}>Clean design</p>
                        <p className={styles['ads-text']}>Robust websites</p>
                        <p className={styles['ads-text']}>Fast solutions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
