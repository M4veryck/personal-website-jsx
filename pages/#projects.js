/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useIntersection from '../components/hooks/useIntersection'

export default function Projects() {
    const projectsRef = useRef()

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
            <h2 className={styles['section--title']}>My Projects</h2>
            <div className={styles['projects--container']}>{Projects}</div>
        </section>
    )
}
