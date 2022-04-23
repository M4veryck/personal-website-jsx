/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import styles from '../../styles/Projects/Projects.module.scss'
import useIntersection from '../hooks/useIntersection'
import Modal from './modal'

export default function Project(props) {
    const {
        id,
        imgSrc,
        imgAlt,
        projectTitle,
        projectDesc,
        animationsEnabled,
        windowBigEnough,
    } = props
    const modalRef = useRef()
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
    const projectVisible = useIntersection(projectRef, '-100px')
    const animation = useAnimation()

    useEffect(() => {
        if (projectVisible) {
            animation.start({
                // scale: 1,
                // opacity: 1,
                x: 0,
                transition: {
                    type: 'easeOut',
                    duration: 1,
                },
            })
            return
        }

        if (windowBigEnough && animationsEnabled) {
            if (Number(id) % 2 === 0) {
                animation.start({
                    x: '50vw',
                    transition: {
                        type: 'easeIn',
                        duration: 1,
                    },
                })
                return
            }
            animation.start({
                x: '-50vw',
                transition: {
                    type: 'easeIn',
                    duration: 1,
                },
            })
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
