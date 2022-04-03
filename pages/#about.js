import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

import styles from '../styles/AboutMe/AboutMe.module.scss'
import useIntersection from '../components/hooks/useIntersection'
import { NavBarContextConsumer } from '../components/navBarContext'
import useCurrentSection from '../components/hooks/useCurrentSection'

export default function AboutMe() {
    const aboutRef = useRef()
    useCurrentSection(aboutRef, '-300px', '/#about')

    return (
        <section
            className={styles['about-me--section']}
            ref={aboutRef}
            id="about"
        >
            <div className={styles['about-me--container']}>
                <h2 className={styles['title']}>Who I am</h2>

                <div className={styles['descriptions--wrapper']}>
                    <span className={styles['description-number']}>1</span>
                    <p className={styles['description']}>
                        I{`'`}m <strong>Maveryck Maya</strong>, a Colombian
                        frontend dev who{`'`}s in its path towards becoming a
                        fullstack engineer.
                    </p>
                    <span className={styles['description-number']}>2</span>
                    <p className={styles['description']}>
                        Being a Math undergrad student,{' '}
                        <strong>quick and creative problem solving</strong> have
                        become second nature.
                    </p>
                    <span className={styles['description-number']}>3</span>
                    <p className={styles['description']}>
                        At{' '}
                        <Link href="https://scrimba.com">
                            <a target="_blank">Scrimba</a>
                        </Link>
                        , I learned the fundamentals about{' '}
                        <strong>Responsive Design, UI and UX</strong>, which
                        allows me to develop quality content.
                    </p>
                </div>

                <h3 className={styles['just-skills']}>Skills</h3>

                <div className={styles['all-skills--wrapper']}>
                    <div
                        className={`${styles['skills--subsection']} ${styles['frontend-skills']}`}
                    >
                        <h4 className={styles['skills-title']}>Frontend</h4>
                        <ul className={styles['skills-list']}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>UI / UX</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>

                    <div
                        className={`${styles['skills--subsection']} ${styles['backend-skills']}`}
                    >
                        <h4 className={styles['skills-title']}>Backend</h4>
                        <ul className={styles['skills-list']}>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Next.js</li>
                        </ul>
                    </div>

                    <div
                        className={`${styles['skills--subsection']} ${styles['others-skills']}`}
                    >
                        <h4 className={styles['skills-title']}>Others</h4>
                        <ul className={styles['skills-list']}>
                            <li>Git</li>
                            <li>Python</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
