/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Contact/Contact.module.scss'
import { useRef } from 'react'
import useCurrentSection from '../../components/hooks/useCurrentSection'
import Layout from '../../components/layout/layout'
import Form from './form'
import useContact, { SEND_OPTIONS } from '../../components/hooks/useContact'

const emailjsId = 'iZu4cY_9HYBlPdW9q'

export default function Contact() {
    const initialState = {
        form: {
            user_name: '',
            user_email: '',
            message: '',
        },
        emailTyped: false,
        badFields: ['user_name', 'user_email', 'message'],
        validEmail: true,
        styleBadFields: false,
        disabledBtn: false,
    }

    const contactRef = useRef()
    useCurrentSection(contactRef, '-50%', '/contact')

    const { emailjsCase, dispatcher, state, setSendingEmail } = useContact(
        initialState,
        emailjsId
    )

    return (
        <Layout>
            <section className={styles.contact} ref={contactRef}>
                <div className={styles.contactContainer}>
                    {emailjsCase === SEND_OPTIONS.SERVER_ERROR ? (
                        <div className={styles.failureMessage}>
                            <div className={styles.iconContainer}>
                                <Image
                                    src="/icons/error-icon.svg"
                                    alt="checked mark"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            Something went wrong :{`(`} <br /> Please refresh
                            and try again.
                        </div>
                    ) : emailjsCase === SEND_OPTIONS.SUCCESS ? (
                        <>
                            <div className={styles.successMessage}>
                                <div className={styles.iconContainer}>
                                    <Image
                                        src="/icons/checked-icon.svg"
                                        alt="checked mark"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                Email sent succesfully! <br /> I{`'`}ll be in
                                contact with you as soon as possible
                            </div>
                            <div className={styles.goHomeContainer}>
                                <Link href="/">
                                    <a className={styles.goHome}>Home</a>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className={styles.title}>Contact me</h2>
                            <p className={styles.desc}>
                                If you are interested in{' '}
                                <strong>hiring me</strong>, providing feedback,
                                or any other inquiries, please fill up the form.
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
    )
}
