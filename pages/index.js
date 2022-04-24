import Head from 'next/head'

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
                    content="Hi! I'm Maveryck Maya, a frontend developer that provides appealing design, creative ideas and fast results."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Hero />
                <AboutMe />
                <Projects />
            </Layout>
        </>
    )
}
