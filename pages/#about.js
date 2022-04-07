import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

import styles from '../styles/AboutMe/AboutMe.module.scss'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useIntersection from '../components/hooks/useIntersection'

export default function AboutMe() {
    const aboutRef = useRef()
    const containerRef = useRef()
    const animation = useAnimation()
    const containerVisible = useIntersection(containerRef, '-50%')
    const [seenCounter, setSeenCounter] = useState(false)

    useCurrentSection(aboutRef, '-50%', '/#about')

    useEffect(() => {
        console.log(containerVisible)
        if (containerVisible) {
            setSeenCounter(true)
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                },
            })
        } else if (!seenCounter && !containerVisible) {
            animation.start({ x: '-40vw' })
        }
    }, [containerVisible])

    return (
        <section
            className={styles['about-me--section']}
            ref={aboutRef}
            id="about"
        >
            <div className={styles['border-decoration']}>
                <motion.div
                    className={styles['about-me--container']}
                    ref={containerRef}
                    // animate={animation}
                >
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

                    <div className={styles['skills--col']}>
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
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
