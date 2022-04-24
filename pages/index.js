import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Index.module.scss'
import Layout from '../components/layout/layout'
import Hero from '../components/hero'
import AboutMe from './#about'
import Projects from './#projects'

export default function Home() {
    return (
        <>
            <Head>
                <title>Maveryck Maya</title>
                <meta
                    name="description"
                    content="Hi! I'm Maveryck Maya, a frontend developer that provides websites with appealing design, thinks of creative ideas and delivers fast results. Open to job offers."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles['index--wrapper']}>
                <Layout>
                    <Hero />
                    <AboutMe />
                    <Projects />
                </Layout>
                <div className={styles['background--container']}>
                    <Image
                        src="/backgrounds/ult-dark-background.svg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={1}
                        priority
                    />
                </div>
            </div>
        </>
    )
}
