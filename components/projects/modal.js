import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Projects/Modal.module.scss'

export default function Modal({
    imgSrc,
    imgAlt,
    projectTitle,
    websiteLink,
    githubLink,
    projectLongDesc,
    bugs,
    techStack,
    difficulties,
    futureFeatures,
    closeModal,
}) {
    return (
        <>
            <div
                className={styles['modal-background']}
                onClick={closeModal}
            ></div>
            <div
                className={`${styles['project--article']} ${styles['project--modal']}`}
            >
                <div
                    className={`${styles['image--container']} ${styles['image--container--modal']}`}
                >
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width={330}
                        height={278}
                        className={styles['project-image']}
                    />
                </div>
                <button className={styles['close-btn']} onClick={closeModal}>
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
                        <a target="_blank" className={styles['website-link']}>
                            Project website
                        </a>
                    </Link>
                    <Link href={githubLink}>
                        <a target="_blank" className={styles['github-link']}>
                            <div className={styles['github-link-icon']}>
                                <Image
                                    src="/icons/github-bw-icon.svg"
                                    alt="github-icon"
                                    width={20}
                                    height={20}
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
                    <p className={styles['project-techs--desc']}>{techStack}</p>

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
        </>
    )
}
