import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from './header'
import Footer from './footer/footer'
import styles from '../../styles/Layout/Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles['page--container']}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
