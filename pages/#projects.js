import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import { useRef } from 'react'
import useCurrentSection from '../components/hooks/useCurrentSection'

export default function Projects() {
    const projectsRef = useRef()
    useCurrentSection(projectsRef, '-50%', '/#projects')

    const Projects = projectsData.map(
        ({ id, imgSrc, imgAlt, projectTitle, projectDesc }) => {
            return (
                <Project
                    key={id}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    projectTitle={projectTitle}
                    projectDesc={projectDesc}
                />
            )
        }
    )

    return (
        <section className={styles.Projects} id="projects" ref={projectsRef}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projectContainer}>{Projects}</div>
        </section>
    )
}
