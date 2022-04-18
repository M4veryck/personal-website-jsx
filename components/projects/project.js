import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import styles from '../../styles/Projects/Projects.module.scss'

export default function Project({ imgSrc, imgAlt, projectTitle, projectDesc }) {
    const modalRef = useRef()
    const backgroundModalRef = useRef()

    return (
        <>
            <div
                className={styles['modal-background']}
                ref={backgroundModalRef}
            ></div>

            <div
                className={`${styles['project--article']} ${styles['project--modal']}`}
                ref={modalRef}
            >
                <div className={styles['image--container']}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        // layout="responsive"
                        width={330}
                        height={278}
                        // objectFit="cover"
                        className={styles['project-image']}
                    />
                </div>
                <div className={styles['text--container']}>
                    <h3 className={styles['project-title']}>{projectTitle}</h3>

                    <p className={styles['project-description']}>
                        {projectDesc}
                    </p>

                    <div className={styles['links--container']}>
                        <Link href="https://google.com">
                            <a
                                target="_blank"
                                className={styles['project-link']}
                            >
                                Open Preview
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <article className={styles['project--article']}>
                <div className={styles['image--container']}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        // layout="responsive"
                        width={330}
                        height={278}
                        // objectFit="cover"
                        className={styles['project-image']}
                    />
                </div>
                <div className={styles['text--container']}>
                    <h3 className={styles['project-title']}>{projectTitle}</h3>

                    <p className={styles['project-description']}>
                        {projectDesc}
                    </p>

                    <div className={styles['links--container']}>
                        {/* <Link href="https://google.com"> */}
                        <button
                            // target="_blank"
                            className={styles['project-link']}
                            onClick={e => {
                                console.log(backgroundModalRef.current)
                                backgroundModalRef.current.style.display =
                                    'block'
                                modalRef.current.style.display = 'block'
                                // document.body.style.overflow = 'hidden'
                            }}
                        >
                            Open Preview
                        </button>
                        {/* </Link> */}
                        {/* <Link href="https://github.com">
                        <a target="_blank" className={styles['project-link']}>
                            <Image
                                src="/icons/white-github-icon.svg"
                                alt="github-icon"
                                width={25}
                                height={25}
                                className={styles.githubIcon}
                            />
                            <span className={styles['link-text}']}>
                                Github Repo
                            </span>
                        </a>
                    </Link> */}
                    </div>
                </div>
            </article>
        </>
    )
}
