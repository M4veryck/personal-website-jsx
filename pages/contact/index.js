/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Contact/Contact.module.scss'
import useCurrentSection from '../../components/hooks/useCurrentSection'
import Layout from '../../components/layout/layout'
import Form from '../../components/contact/form'
import useContact, { SEND_OPTIONS } from '../../components/hooks/useContact'

const emailjsId = 'iZu4cY_9HYBlPdW9q'

export default function Contact() {
    const contactRef = useRef()
    useCurrentSection(contactRef, '-50%', '/contact')

    const { emailjsCase, dispatcher, state, setSendingEmail } =
        useContact(emailjsId)

    return (
        <>
            <Head>
                <title>Contact - Maveryck Maya</title>
                <meta
                    name="description"
                    content="If you are interested in hiring me, providing feedback, or any other inquiries, please fill in the form."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles['contact--wrapper']}>
                <Layout>
                    <section
                        className={styles['contact--section']}
                        ref={contactRef}
                    >
                        <div className={styles['contact--container']}>
                            {emailjsCase === SEND_OPTIONS.SERVER_ERROR ? (
                                <div
                                    className={
                                        styles['failure-message--container']
                                    }
                                >
                                    <div className={styles['icon--container']}>
                                        <Image
                                            src="/icons/error-icon.svg"
                                            alt="checked mark"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <p className={styles['failure-message']}>
                                        Something went wrong :{`(`} <br />{' '}
                                        Please refresh and try again.
                                    </p>
                                </div>
                            ) : emailjsCase === SEND_OPTIONS.SUCCESS ? (
                                <>
                                    <div
                                        className={
                                            styles['success-message--container']
                                        }
                                    >
                                        <div
                                            className={
                                                styles['icon--container']
                                            }
                                        >
                                            <Image
                                                src="/icons/checked-icon.svg"
                                                alt="checked mark"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <p className={styles['succes-message']}>
                                            Email sent succesfully! <br /> I
                                            {`'`}ll get in contact with you as
                                            soon as possible.
                                        </p>
                                    </div>
                                    <div
                                        className={styles['go-home--container']}
                                    >
                                        <Link href="/">
                                            <a
                                                className={
                                                    styles['go-home-btn']
                                                }
                                            >
                                                Home
                                            </a>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className={styles['title']}>
                                        Contact me
                                    </h2>
                                    <p className={styles['description']}>
                                        If you are interested in{' '}
                                        <strong>hiring me</strong>, providing
                                        feedback, or any other inquiries, please
                                        fill in the form.
                                    </p>
                                    <Form
                                        dispatcher={dispatcher}
                                        state={state}
                                        setSendingEmail={setSendingEmail}
                                    />
                                </>
                            )}
                        </div>
                    </section>
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
