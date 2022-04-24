/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import { NavBarContextConsumer } from '../components/navBarContext'
import useIntersection from '../components/hooks/useIntersection'

export default function Projects() {
    const projectsRef = useRef()
    const titleRef = useRef()
    const [titleSeen, setTitleSeen] = useState(false)
    const { windowBigEnough } = NavBarContextConsumer()
    const titleVisible = useIntersection(titleRef, '-50px')
    const animation = useAnimation()

    useEffect(() => {
        if (!titleSeen) {
            if (titleVisible) {
                animation.start({
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'easeOut',
                        duration: 1,
                    },
                })
                setTitleSeen(true)
                return
            }

            if (windowBigEnough) {
                animation.start({
                    opacity: 0,
                    y: '150%',
                    transition: {
                        type: 'easeIn',
                        duration: 1,
                    },
                })
                return
            }
        }
    }, [titleVisible])

    useCurrentSection(projectsRef, '-50%', '/#projects')

    const Projects = projectsData.map(projectInfo => {
        return <Project key={projectInfo.id} {...projectInfo} />
    })

    return (
        <section
            className={styles['projects--section']}
            id="projects"
            ref={projectsRef}
        >
            <motion.h2
                className={styles['section--title']}
                ref={titleRef}
                animate={animation}
            >
                My Projects
            </motion.h2>

            <div className={styles['projects--container']}>{Projects}</div>
        </section>
    )
}
