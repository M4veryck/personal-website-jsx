/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
// import { motion, useAnimation } from 'framer-motion'

import styles from '../styles/AboutMe/AboutMe.module.scss'
import useCurrentSection from '../components/hooks/useCurrentSection'

export default function AboutMe() {
    const aboutRef = useRef()
    // const containerRef = useRef()
    // const animation = useAnimation()
    const [aboutVisible, setAboutVisible] = useState(false)
    // console.log(aboutVisible)

    useCurrentSection(aboutRef, '-50%', '/#about')

    // useEffect(() => {
    //     // console.log(aboutVisible)
    //     // console.log(seen)
    //     if (aboutVisible) {
    //         setSeen(true)
    //         animation.start({
    //             x: 0,
    //             transition: {
    //                 type: 'easeOut',
    //                 duration: 1,
    //             },
    //         })
    //         // console.log('show works')
    //     } else if (!aboutVisible) {
    //         animation.start({ x: '-100vw' })
    //         // console.log('hide works')
    //     }
    // }, [aboutVisible, seen])

    useEffect(() => {
        const aboutEl = document.getElementById('about')

        if (typeof window !== 'undefined') {
            const distanceToHalfAbout =
                window.pageYOffset + aboutEl.getBoundingClientRect().top * 1.5

            window.addEventListener('scroll', () => {
                let amountScrolled = window.pageYOffset + window.innerHeight
                if (amountScrolled >= distanceToHalfAbout) {
                    setAboutVisible(true)
                }
            })
        }

        return () => {
            if (typeof window !== 'undefined') {
                const distanceToHalfAbout =
                    window.pageYOffset +
                    aboutEl.getBoundingClientRect().top * 1.5

                window.removeEventListener('scroll', () => {
                    let amountScrolled = window.pageYOffset + window.innerHeight
                    if (amountScrolled >= distanceToHalfAbout) {
                        setAboutVisible(true)
                    }
                })
            }
        }
    }, [aboutVisible])

    return (
        <section
            className={`${styles['about-me--section']} ${
                aboutVisible && styles['show-about']
            }`}
            ref={aboutRef}
            id="about"
            // animate={animation}
        >
            <div
                className={styles['border-decoration']}
                // ref={containerRef}
            >
                <div className={styles['about-me--container']}>
                    <div className={styles['overlap-div']}>
                        <aside className={styles['who-i-am--col']}>
                            <h2 className={styles['title']}>Who I am</h2>

                            <div className={styles['descriptions--wrapper']}>
                                <p className={styles['description']}>
                                    I{`'`}m <strong>Maveryck Maya</strong>, a
                                    20-year-old Colombian fullstack dev who{`'`}
                                    s in its path towards becoming a senior
                                    fullstack engineer.
                                </p>
                                <p className={styles['description']}>
                                    Being a Math undergrad student,{' '}
                                    <strong>
                                        quick and creative problem solving
                                    </strong>{' '}
                                    have become second nature.
                                </p>
                                <p className={styles['description']}>
                                    At{' '}
                                    <Link href="https://scrimba.com">
                                        <a target="_blank">Scrimba</a>
                                    </Link>
                                    , I learned the fundamentals about{' '}
                                    <strong>
                                        Responsive Design, UI and UX
                                    </strong>
                                    , which allows me to develop quality
                                    content.
                                </p>
                            </div>
                        </aside>
                    </div>

                    <aside className={styles['skills--col']}>
                        <h3 className={styles['just-skills']}>Skills</h3>

                        <div className={styles['all-skills--wrapper']}>
                            <div
                                className={`${styles['skills--subsection']} ${styles['backend-skills']}`}
                            >
                                <h4 className={styles['skills-title']}>
                                    Backend
                                </h4>
                                <ul className={styles['skills-list']}>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Next.js</li>
                                </ul>
                            </div>

                            <div
                                className={`${styles['skills--subsection']} ${styles['frontend-skills']}`}
                            >
                                <h4 className={styles['skills-title']}>
                                    Frontend
                                </h4>
                                <ul className={styles['skills-list']}>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Sass</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                </ul>
                            </div>

                            <div
                                className={`${styles['skills--subsection']} ${styles['others-skills']}`}
                            >
                                <h4 className={styles['skills-title']}>
                                    Others
                                </h4>
                                <ul className={styles['skills-list']}>
                                    <li>Git</li>
                                    <li>Python</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
