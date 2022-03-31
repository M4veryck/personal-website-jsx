import Image from 'next/image'
import styles from '../../styles/Projects/Projects.module.scss'

export default function Projects() {
    return (
        <section className={styles.Projects} id="projects">
            <h2>My Projects</h2>
            <div className={styles.project}>
                <h3>Lorem ipsum</h3>
                <div className={styles.imageContainer}>
                    <Image
                        src="/art-background.jpg"
                        alt=""
                        width={270}
                        height={270}
                        className={styles.projectImage}
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.project}>
                <h3>Lorem ipsum</h3>
                <div className={styles.imageContainer}>
                    <Image
                        src="/art-background.jpg"
                        alt=""
                        width={270}
                        height={270}
                        className={styles.projectImage}
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.project}>
                <h3>Lorem ipsum</h3>
                <div className={styles.imageContainer}>
                    <Image
                        src="/art-background.jpg"
                        alt=""
                        width={270}
                        height={270}
                        className={styles.projectImage}
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    )
}
