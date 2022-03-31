import styles from '../../styles/Hero/Hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.Hero} id="main">
            <div className={styles.heroContainer}>
                <div className={styles.leftCol}>
                    <h1 className={styles.intro}>Hi! I{`'`}m </h1>
                    <div className={styles.nameAndRol}>
                        <span className={styles.name}>Maveryck Maya</span>
                        <p className={styles.rol}>Frontend dev</p>
                    </div>
                </div>
                <p className={styles.desc}>
                    {/* Having knowledge on <br />
                    <strong>HTML, CSS, JavaScript,</strong> and
                    <strong> React</strong>,  */}
                    I tackle problems with{' '}
                    <span className={styles.descHighlights}>
                        efficient solutions
                    </span>
                    , while writing{' '}
                    <span className={styles.descHighlights}>
                        clean and understandable
                    </span>{' '}
                    code.
                </p>
            </div>
        </section>
    )
}
