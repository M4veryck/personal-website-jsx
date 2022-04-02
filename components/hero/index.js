import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import styles from '../../styles/Hero/Hero.module.scss'
import useOnScreen from '../hooks/useOnScreen'

export default function Hero() {
    return (
        <section className={styles.Hero} id="main">
            <div className={styles.heroContainer}>
                <h1 className={styles.intro}>Hi! I{`'`}m </h1>
                <div className={styles.nameAndRol}>
                    <div className={styles.nameContainer}>
                        <div className={styles.name}>
                            {'<'}Maveryck Maya{'/>'}
                        </div>
                    </div>
                    <p className={styles.rol}>Frontend developer</p>
                </div>
                <p className={styles.quote}>
                    <q className={styles.quotePhrase}>
                        “You must have chaos within you to give birth to a
                        dancing star.”
                    </q>
                    - Friedrich Nietzsche
                </p>
                <div className={styles.avatarImageContainer}>
                    <Image
                        src="/styled-avatar2.svg"
                        alt="Maveryck Maya cartoon drawing"
                        width={350}
                        height={350}
                        className={styles.avatarImage}
                    />
                </div>
            </div>
        </section>
    )
}
