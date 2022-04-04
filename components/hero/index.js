import { useRef } from 'react'
import Image from 'next/image'

import styles from '../../styles/Hero/Hero.module.scss'
import useCurrentSection from '../hooks/useCurrentSection'

export default function Hero() {
    const heroRef = useRef()
    useCurrentSection(heroRef, '-300px', '/')

    return (
        <section className={styles['hero--section']} id="main" ref={heroRef}>
            <div className={styles['hero--container']}>
                <div className={styles['avatar-image--container']}>
                    <Image
                        src="/hero/styled-avatar.svg"
                        alt="Maveryck Maya cartoon drawing"
                        width={350}
                        height={350}
                        priority
                        layout="intrinsic"
                        className={styles['avatar-image']}
                    />
                </div>

                <div className={styles['text--container']}>
                    <h1 className={styles['greeting']}>Hi! I{`'`}m </h1>

                    <div className={styles['name-rol--container']}>
                        <div className={styles['name-animation--container']}>
                            <h1 className={styles['name']}>
                                {'<'}Maveryck Maya{'/>'}
                            </h1>
                        </div>
                        <p className={styles['rol']}>Frontend developer</p>
                    </div>

                    <p className={styles['quote--container']}>
                        <q className={styles['quote-phrase']}>
                            “Beyond all ideas of right and wrong there is a
                            field, I will be meeting you there.”
                        </q>
                        {'  '}-{' '}
                        <strong className={styles['quote-author']}>Rumi</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}
