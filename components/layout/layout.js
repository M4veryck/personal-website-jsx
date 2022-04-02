import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from './header'
import Footer from './footer/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
