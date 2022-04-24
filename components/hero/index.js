/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import Image from 'next/image'

import styles from '../../styles/Hero/Hero.module.scss'
import useCurrentSection from '../hooks/useCurrentSection'

export default function Hero() {
    const heroRef = useRef()
    const adsText1 = useRef()
    const adsText2 = useRef()
    const adsText3 = useRef()
    const allAdsText = [adsText1, adsText2, adsText3]
    useCurrentSection(heroRef, '-50%', '/')

    useEffect(() => {
        allAdsText.forEach((adsText, idx) => {
            const textContentLength = adsText.current.textContent.length
            document.documentElement.style.setProperty(
                `--adsText${idx + 1}Length`,
                textContentLength
            )
        })
    }, [])

    return (
        <section className={styles['hero--section']} id="main" ref={heroRef}>
            <div className={styles['hero--container']}>
                <div className={styles['image--container']}>
                    <Image
                        src="/hero/website-cover.png"
                        alt=""
                        width={520}
                        height={741}
                        priority
                    />
                </div>
                <div className={styles['text--container']}>
                    <h1 className={styles['name']}>
                        Maveryck
                        <br />
                        Maya
                    </h1>
                    <p className={styles['rol']}>Frontend developer</p>
                    <div className={styles['ads-text--container']}>
                        <div className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_1']}`}
                                ref={adsText1}
                            >
                                Appealing design
                            </span>
                        </div>
                        <div className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_2']}`}
                                ref={adsText2}
                            >
                                Creative ideas
                            </span>
                        </div>
                        <div className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_3']}`}
                                ref={adsText3}
                            >
                                Fast results
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
