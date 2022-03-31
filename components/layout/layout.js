import Link from 'next/link'
import Image from 'next/image'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//     faEnvelope,
//     faLinkedin,
//     faGithub,
// } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
