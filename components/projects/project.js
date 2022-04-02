import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects/Projects.module.scss'

export default function Project() {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <Image
                    src="/art-background.jpg"
                    alt=""
                    layout="fill"
                    sizes="100%"
                    className={styles.projectImage}
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.projectTitle}>Lorem ipsum</h3>
                <p className={styles.projectDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
                <div className={styles.linksContainer}>
                    <Link href="#">
                        <a className={styles.projectLink}>Project</a>
                    </Link>
                    <Link href="#">
                        <a className={styles.projectLink}>
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
