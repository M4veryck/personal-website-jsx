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

            document.documentElement.style.setProperty(
                `--left${idx + 1}`,
                `${100 + 100 / (textContentLength + 1)}%`
            )
        })
    }, [])

    return (
        <section className={styles['hero--section']} id="main" ref={heroRef}>
            <div className={styles['hero--container']}>
                <div className={styles['image--container']}>
                    <Image
                        src="/hero/website-cover.svg"
                        alt=""
                        // layout="responsive"
                        // objectFit="cover"
                        width={520}
                        height={741}
                    />
                </div>
                <div className={styles['text--container']}>
                    <h1 className={styles['name']}>
                        <span className={styles['first-name']}>Maveryck </span>
                        <br />
                        <span className={styles['last-name']}>Maya</span>
                    </h1>
                    <p className={styles['rol']}>Frontend developer</p>
                    <div className={styles['ads-text--container']}>
                        <p className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_1']}`}
                                ref={adsText1}
                            >
                                Appealing design
                            </span>
                        </p>
                        <p className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_2']}`}
                                ref={adsText2}
                            >
                                Creative ideas
                            </span>
                        </p>
                        <p className={styles['ads-text--border']}>
                            <span
                                className={`${styles['ads-text']} ${styles['ads-text_3']}`}
                                ref={adsText3}
                            >
                                Fast results
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
