import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects/Projects.module.scss'
import Project from './project'

export default function Projects() {
    return (
        <section className={styles.Projects} id="projects">
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projectContainer}>
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}
