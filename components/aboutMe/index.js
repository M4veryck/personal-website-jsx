import styles from '../../styles/AboutMe/AboutMe.module.scss'

export default function AboutMe() {
    return (
        <section className={styles.AboutMe} id="about">
            <div className={styles.aboutMeContainer}>
                <h2 className={styles.title}>About me</h2>
                <div className={styles.wrapper}>
                    {/* <div className={styles.myDescriptionContainer}> */}
                    <p className={styles.myDescription}>
                        I{`'`}m <strong>Maveryck Maya</strong>, a Colombian
                        frontend dev who{`'`}s just starting its path towards
                        becoming a fullstack engineer.
                    </p>
                    {/* </div> */}
                    {/* <div className={styles.myDescriptionContainer}> */}
                    <p className={styles.myDescription}>
                        Because I{`'`}m currently studying a Math undergrad,{' '}
                        <strong>quick and creative problem solving</strong> have
                        become second nature.
                    </p>
                    {/* </div> */}
                    {/* <div className={styles.myDescriptionContainer}> */}
                    <p className={styles.myDescription}>
                        I{`'`}m also a Frontend career path graduate at scrimba.
                        There, I learned the fundamentals about{' '}
                        <strong>Responsive Design, UI and UX</strong>, which
                        allows me to develop quality content.
                    </p>
                    {/* </div> */}
                </div>
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTitle}>Frontend skills:</h3>
                    <p className={styles.skills}>
                        HTML, CSS, Sass, JavaScript, React.
                    </p>
                </div>
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTitle}>Backend skills:</h3>
                    <p className={styles.skills}>
                        Node.js, Express, Mongoose, Next.js.
                    </p>
                </div>
                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTitle}>Others:</h3>
                    <p className={styles.skills}>Git, Heroku.</p>
                </div>
            </div>
        </section>
    )
}
