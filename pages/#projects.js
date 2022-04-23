/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useIntersection from '../components/hooks/useIntersection'

export default function Projects() {
    const projectsRef = useRef()
    const [windowBigEnough, setWindowBigEnough] = useState(false)
    const [animationsEnabled, setAnimationsEnabled] = useState(true)

    useCurrentSection(projectsRef, '-50%', '/#projects')

    useEffect(() => {
        if (window.innerWidth >= 1000) {
            setWindowBigEnough(true)
        } else {
            setWindowBigEnough(false)
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1000) {
                setWindowBigEnough(true)
            } else {
                setWindowBigEnough(false)
            }
        })
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth >= 1000) {
                    setWindowBigEnough(true)
                } else {
                    setWindowBigEnough(false)
                }
            })
        }
    }, [])

    const Projects = projectsData.map(projectInfo => {
        return (
            <Project
                key={projectInfo.id}
                {...projectInfo}
                animationsEnabled={animationsEnabled}
                windowBigEnough={windowBigEnough}
            />
        )
    })

    return (
        <section
            className={styles['projects--section']}
            id="projects"
            ref={projectsRef}
        >
            <h2 className={styles['section--title']}>My Projects</h2>
            {windowBigEnough && (
                <div className={styles['toggle--container']}>
                    <div className={styles['toggle-caption']}>Animations</div>
                    <div
                        className={`${styles['toggle']} ${
                            animationsEnabled && styles['toggle-on']
                        }`}
                        onClick={e => {
                            e.preventDefault()
                            setAnimationsEnabled(prev => !prev)
                        }}
                    >
                        <div className={styles['toggle-text-off']}>OFF</div>
                        <div className={styles['glow-comp']}></div>
                        <div className={styles['toggle-button']}></div>
                        <div className={styles['toggle-text-on']}>ON</div>
                    </div>
                </div>
            )}
            <div className={styles['projects--container']}>{Projects}</div>
        </section>
    )
}
