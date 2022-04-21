/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

import styles from '../styles/Projects/Projects.module.scss'
import Project from '../components/projects/project'
import { projectsData } from '../components/projects/projectsData'
import useCurrentSection from '../components/hooks/useCurrentSection'
import useIntersection from '../components/hooks/useIntersection'

export default function Projects() {
    const projectsRef = useRef()
    const projectsContainerRef = useRef()
    const projectsVisible = useIntersection(projectsContainerRef, '-300px')
    const animation = useAnimation()

    useEffect(() => {
        if (projectsVisible) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 2,
                },
            })
            return
        }

        animation.start({
            x: '-50vw',
            transition: {
                type: 'spring',
                duration: 2,
            },
        })
    }, [projectsVisible])

    useCurrentSection(projectsRef, '-50%', '/#projects')

    const Projects = projectsData.map(
        ({
            id,
            imgSrc,
            imgAlt,
            websiteLink,
            githubLink,
            projectTitle,
            projectDesc,
            projectLongDesc,
            bugs,
            techStack,
            difficulties,
            futureFeatures,
        }) => {
            return (
                <Project
                    key={id}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    websiteLink={websiteLink}
                    githubLink={githubLink}
                    projectTitle={projectTitle}
                    projectDesc={projectDesc}
                    projectLongDesc={projectLongDesc}
                    bugs={bugs}
                    techStack={techStack}
                    difficulties={difficulties}
                    futureFeatures={futureFeatures}
                />
            )
        }
    )

    return (
        <section
            className={styles['projects--section']}
            id="projects"
            ref={projectsRef}
        >
            <h2 className={styles['section--title']}>My Projects</h2>
            <div
                className={styles['projects--container']}
                ref={projectsContainerRef}
                // animate={animation}
            >
                {Projects}
            </div>
        </section>
    )
}
