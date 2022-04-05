import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Contact/Contact.module.scss'
import { validateEmail } from '../../utils/utils'
import { useEffect, useState, useRef } from 'react'
import emailjs, { init } from '@emailjs/browser'
import useCurrentSection from '../../components/hooks/useCurrentSection'
import Layout from '../../components/layout/layout'
init('iZu4cY_9HYBlPdW9q')

export default function Contact() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })
    const [success, setSuccess] = useState(null)
    const [disabledButton, setDisabledButton] = useState(false)
    const [validEmail, setValidEmail] = useState(true)
    const [validForm, setValidForm] = useState(true)
    const contactRef = useRef()
    useCurrentSection(contactRef, '0px', '/contact')

    const isFormFilled = formData => {
        const formDataValues = Object.values(formData)
        return formDataValues.every(field => field !== '')
    }

    const handleChange = e => {
        const { value, name } = e.target

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
    }

    const handleEmail = e => {
        const { value } = e.target

        setFormData(prevFormData => ({ ...prevFormData, user_email: value }))
        setValidEmail(validateEmail(value))
    }

    // useEffect(() => {
    //     const userEmail = formData.user_email
    //     setValidForm(isFormFilled(formData) && validateEmail(userEmail))

    //     setDisabledButton(!isFormFilled(formData) || !validateEmail(userEmail))
    // }, [formData])

    // useEffect(() => {
    //     const sendBtn = document.getElementById('send-btn')
    //     sendBtn.addEventListener('click', () => {
    //         if (validForm) {
    //             sendBtn.textContent = 'Loading...'
    //             return
    //         }
    //         sendBtn.textContent = 'Send'
    //     })
    //     return () => {
    //         sendBtn.removeEventListener('click', () => {
    //             if (validForm) {
    //                 sendBtn.textContent = 'Loading...'
    //                 return
    //             }
    //             sendBtn.textContent = 'Send'
    //         })
    //     }
    // }, [])

    const handleInvalidSend = () => {
        // setFormData({
        //     user_name: '',
        //     user_email: '',
        //     message: '',
        // })

        setValidForm(false)
        setDisabledButton(false)
    }

    const sendEmail = e => {
        e.preventDefault()

        // if (!(isFormFilled(formData) && validateEmail(userEmail))) {
        //     setFormData({
        //         user_name: '',
        //         user_email: '',
        //         message: '',
        //     })

        //     setValidForm(false)
        //     setDisabledButton(false)

        //     return
        // }

        emailjs
            .send('contact_service', 'contact_form', formData)
            .then(result => {
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: '',
                })
                setSuccess(true)
                setDisabledButton(false)

                console.log(
                    `Email sent from ${formData.user_email} succesfully`
                )
            })
            .catch(err => {
                setSuccess(false)
                setDisabledButton(false)

                console.log(error.text)
            })
    }

    return (
        <Layout>
            <section className={styles.contact} ref={contactRef}>
                {/* <div className={styles['background--container']}>
                <Image
                    src="/backgrounds/contact-background.svg"
                    alt="background image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className={styles['background-image']}
                />
            </div> */}
                <div className={styles.contactContainer}>
                    {success ? (
                        <>
                            <p className={styles.successMessage}>
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
                            </p>
                            <div className={styles.goHomeContainer}>
                                <Link href="/">
                                    <a className={styles.goHome}>Home</a>
                                </Link>
                            </div>
                        </>
                    ) : success === false ? (
                        <p className={styles.failureMessage}>
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
                        </p>
                    ) : (
                        <>
                            <h2 className={styles.title}>Contact me</h2>
                            <p className={styles.desc}>
                                If you are interested in{' '}
                                <strong>hiring me</strong>, providing feedback,
                                or any other inquiries, please fill up the form.
                            </p>
                            <form className={styles.form} onSubmit={sendEmail}>
                                <label htmlFor="user_name">
                                    Name{' '}
                                    <span className={styles['required']}>
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    onChange={handleChange}
                                    value={formData.user_name}
                                    className={styles.userName}
                                    required
                                />

                                <label htmlFor="user_email">
                                    Email{' '}
                                    <span className={styles['required']}>
                                        *
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    onChange={handleEmail}
                                    value={formData.user_email}
                                    className={styles.userEmail}
                                    required
                                />
                                {!validEmail && (
                                    <p className={styles.invalidEmailMsg}>
                                        ! Invalid Email
                                    </p>
                                )}

                                <label htmlFor="message">
                                    Message{' '}
                                    <span className={styles['required']}>
                                        *
                                    </span>
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    className={styles.message}
                                    required
                                />

                                <p className={styles['required']}>* Required</p>

                                {!validForm && !isFormFilled(formData) && (
                                    <p
                                        className={`${styles['failureMessage']} ${styles['fields-required']}`}
                                    >
                                        {' '}
                                        All fields are required
                                    </p>
                                )}

                                <button
                                    disabled={disabledButton}
                                    onClick={e => {
                                        if (
                                            !(
                                                isFormFilled(formData) &&
                                                validateEmail(
                                                    formData.user_email
                                                )
                                            )
                                        ) {
                                            handleInvalidSend()
                                            return
                                        }
                                        const sendBtn =
                                            document.getElementById('send-btn')
                                        sendBtn.textContent = 'Loading...'
                                        setDisabledButton(true)
                                        sendEmail(e)
                                    }}
                                    className={styles.sendButton}
                                    id="send-btn"
                                >
                                    Send
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </Layout>
    )
}
