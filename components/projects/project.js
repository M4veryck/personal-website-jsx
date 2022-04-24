/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import styles from '../../styles/Projects/Projects.module.scss'
import useIntersection from '../hooks/useIntersection'
import Modal from './modal'
import { NavBarContextConsumer } from '../navBarContext'

export default function Project(props) {
    const { id, imgSrc, imgAlt, projectTitle, projectDesc } = props
    const modalRef = useRef()
    const { windowBigEnough } = NavBarContextConsumer()
    const [displayModal, setDisplayModal] = useState(false)

    function stylesModalDisplayed() {
        modalRef.current.style.display = 'block'
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
        document.getElementById('projects').style.zIndex = 9
    }

    function stylesModalHidden() {
        modalRef.current.style.display = 'none'
        document.body.style.overflowY = 'initial'
        document.documentElement.style.overflowY = 'initial'
        document.getElementById('projects').style.zIndex = 2
    }

    function closeModal() {
        setDisplayModal(false)
    }

    useEffect(() => {
        if (displayModal) {
            stylesModalDisplayed()
            return
        }
        stylesModalHidden()
    }, [displayModal])

    const projectRef = useRef()
    const projectVisible = useIntersection(projectRef, '0px')
    const [projectSeen, setProjectSeen] = useState(false)
    const animation = useAnimation()

    useEffect(() => {
        if (!projectSeen) {
            if (projectVisible) {
                animation.start({
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'easeOut',
                        duration: 1,
                    },
                })
                setProjectSeen(true)
                return
            }

            if (windowBigEnough) {
                animation.start({
                    opacity: 0,
                    y: '50%',
                    transition: {
                        type: 'easeIn',
                        duration: 1,
                    },
                })
                return
            }
        }
    }, [projectVisible])

    return (
        <>
            <div className={styles['modal--container']} ref={modalRef}>
                <Modal {...props} closeModal={closeModal} />
            </div>

            <motion.article
                className={styles['project--article']}
                ref={projectRef}
                animate={animation}
            >
                <div className={styles['image--container']}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={330}
                        height={278}
                        className={styles['project-image']}
                    />
                </div>
                <div className={styles['text--container']}>
                    <h3 className={styles['project-title']}>{projectTitle}</h3>

                    <p className={styles['project-description']}>
                        {projectDesc}
                    </p>

                    <div className={styles['links--container']}>
                        <button
                            className={styles['project-link']}
                            onClick={e => {
                                setDisplayModal(true)
                            }}
                        >
                            Open Preview
                        </button>
                    </div>
                </div>
            </motion.article>
        </>
    )
}
