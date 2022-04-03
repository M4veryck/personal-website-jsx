import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects/Projects.module.scss'

export default function Project({ imgSrc, imgAlt, projectTitle, projectDesc }) {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={320}
                    height={360}
                    // layout="fill"
                    objectFit="cover"
                    // sizes="100%"
                    className={styles.projectImage}
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.projectTitle}>{projectTitle}</h3>
                <p className={styles.projectDesc}>{projectDesc}</p>
                <div className={styles.linksContainer}>
                    <Link href="https://google.com">
                        <a target="_blank" className={styles.projectLink}>
                            Project
                        </a>
                    </Link>
                    <Link href="https://github.com">
                        <a target="_blank" className={styles.projectLink}>
                            <Image
                                src="/github-icon3.svg"
                                alt="github-icon"
                                width={30}
                                height={30}
                                className={styles.githubIcon}
                            />
                            <span className={styles.linkText}>Github Repo</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
