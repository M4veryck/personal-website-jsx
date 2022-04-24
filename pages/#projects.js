/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react'
import { motion } from 'framer-motion'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useSlideFirstTime from '../components/hooks/useSlideFirstTime'

export default function Projects() {
    const projectsRef = useRef()
    const titleRef = useRef()
    const lpRef = useRef()
    const titleAnimation = useSlideFirstTime(titleRef, {
        axis: 'y',
        overflow: '150%',
        reveal: true,
        revealAt: '-10px',
    })
    const lpAnimation = useSlideFirstTime(titleRef, {
        axis: 'y',
        overflow: '150%',
        reveal: true,
        revealAt: '-10px',
    })

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
                animate={titleAnimation}
            >
                Checkout my work:
            </motion.h2>

            <motion.h3
                className={styles['latest-projects--title']}
                ref={lpRef}
                animate={lpAnimation}
            >
                Latest projects
            </motion.h3>

            <div className={styles['projects--container']}>{Projects}</div>
        </section>
    )
}
