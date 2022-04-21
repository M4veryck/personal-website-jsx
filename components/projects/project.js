import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

import styles from '../../styles/Projects/Projects.module.scss'

export default function Project({
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
}) {
    const modalRef = useRef()
    const backgroundModalRef = useRef()
    const [displayModal, setDisplayModal] = useState(false)

    function stylesModalDisplayed() {
        // backgroundModalRef.current.style.display = 'block'
        modalRef.current.style.display = 'block'
        document.body.style.overflow = 'hidden'
        document.getElementById('projects').style.zIndex = 9
    }

    function stylesModalHidden() {
        // backgroundModalRef.current.style.display = 'none'
        modalRef.current.style.display = 'none'
        document.body.style.overflow = 'auto'
        document.getElementById('projects').style.zIndex = 2
    }

    useEffect(() => {
        if (displayModal) {
            stylesModalDisplayed()
            return
        }
        stylesModalHidden()
    }, [displayModal])

    return (
        <>
            <div className={styles['modal--container']} ref={modalRef}>
                <div
                    className={styles['modal-background']}
                    onClick={e => {
                        setDisplayModal(false)
                    }}
                ></div>
                <div
                    className={`${styles['project--article']} ${styles['project--modal']}`}
                    // ref={modalRef}
                >
                    <div
                        className={`${styles['image--container']} ${styles['image--container--modal']}`}
                    >
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
                    <button
                        className={styles['close-btn']}
                        onClick={e => {
                            setDisplayModal(false)
                            // document.body.removeEventListener('click', () => {
                            // })
                        }}
                    >
                        <Image
                            src="/icons/error-icon.svg"
                            alt="close modal"
                            width={30}
                            height={30}
                        />
                    </button>
                    <div
                        className={`${styles['links--container']} ${styles['links--container--modal']}`}
                    >
                        <Link href={websiteLink}>
                            <a
                                target="_blank"
                                className={styles['website-link']}
                            >
                                Project website
                            </a>
                        </Link>
                        <Link href={githubLink}>
                            <a
                                target="_blank"
                                className={styles['github-link']}
                            >
                                <div className={styles['github-link-icon']}>
                                    <Image
                                        src="/icons/github-bw-icon.svg"
                                        alt="github-icon"
                                        width={20}
                                        height={20}
                                        // className={styles['github-link-icon']}
                                    />
                                </div>
                                <span className={styles['github-link-text']}>
                                    Github repo
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div
                        className={`${styles['text--container']} ${styles['text--container--modal']}`}
                    >
                        <h1 className={styles['project-title--modal']}>
                            {projectTitle}
                        </h1>

                        <p className={styles['project-desc--modal']}>
                            {projectLongDesc}
                        </p>

                        {bugs && (
                            <>
                                <h2 className={styles['project-bugs--title']}>
                                    Bugs
                                </h2>
                                <p className={styles['project-bugs--desc']}>
                                    {bugs}
                                </p>
                            </>
                        )}

                        <h2 className={styles['project-techs--title']}>
                            Tech stack used
                        </h2>
                        <p className={styles['project-techs--desc']}>
                            {techStack}
                        </p>

                        <h2 className={styles['project-diffs--title']}>
                            Difficulties presented
                        </h2>
                        <p className={styles['project-diffs--desc']}>
                            {difficulties}
                        </p>

                        <h2 className={styles['project-features--title']}>
                            Upcoming Features
                        </h2>
                        <p className={styles['project-features--desc']}>
                            {futureFeatures}
                        </p>
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
                                setDisplayModal(true)
                                // document.body.addEventListener('click', () => {
                                //     stylesModalHidden()
                                // })
                            }}
                        >
                            Open Preview
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            </article>
        </>
    )
}
