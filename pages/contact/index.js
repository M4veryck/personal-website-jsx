import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Contact/Contact.module.scss'
import { validateEmail } from '../../utils/utils'
import { useEffect, useState, useRef } from 'react'
import emailjs, { init, send } from '@emailjs/browser'
import useCurrentSection from '../../components/hooks/useCurrentSection'
init('iZu4cY_9HYBlPdW9q')

export default function Contact() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })
    const [success, setSuccess] = useState(null)
    const [disabledButton, setDisabledButton] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validForm, setValidForm] = useState(false)
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

    useEffect(() => {
        const userEmail = formData.user_email
        setValidForm(isFormFilled(formData) && validateEmail(userEmail))

        setDisabledButton(!isFormFilled(formData) || !validateEmail(userEmail))
    }, [formData])

    useEffect(() => {
        const sendBtn = document.getElementById('send-btn')
        sendBtn.addEventListener(
            'click',
            () => (sendBtn.textContent = 'Loading...')
        )
        return () => {
            sendBtn.removeEventListener(
                'click',
                () => (sendBtn.textContent = 'Loading...')
            )
        }
    }, [])

    const sendEmail = e => {
        e.preventDefault()

        if (!validForm) {
            setSuccess(false)
            return
        }

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
        <section className={styles.contact} ref={contactRef}>
            <div className={styles.contactContainer}>
                <h2 className={styles.title}>Contact me</h2>
                <p className={styles.desc}>
                    If you are interested in <strong>hiring me</strong> or any
                    other inquiries, please fill up the form.
                </p>
                {success ? (
                    <>
                        <p className={styles.successMessage}>
                            <div className={styles.iconContainer}>
                                <Image
                                    src="/checked-icon2.svg"
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
                                src="/error-icon.svg"
                                alt="checked mark"
                                width={40}
                                height={40}
                            />
                        </div>
                        Something went wrong :{`(`} <br /> Please refresh and
                        try again.
                    </p>
                ) : (
                    <form className={styles.form} onSubmit={sendEmail}>
                        <label htmlFor="user_name">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            onChange={handleChange}
                            value={formData.user_name}
                            className={styles.userName}
                        />

                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            onChange={handleEmail}
                            value={formData.user_email}
                            className={styles.userEmail}
                        />
                        {!validEmail && (
                            <p className={styles.invalidEmailMsg}>
                                ! Invalid Email
                            </p>
                        )}

                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            onChange={handleChange}
                            value={formData.message}
                            className={styles.message}
                        />

                        {!validForm && (
                            <p className={styles.failureMessage}>
                                All fields are required
                            </p>
                        )}

                        <button
                            disabled={disabledButton}
                            onClick={e => {
                                setDisabledButton(true)
                                sendEmail(e)
                            }}
                            className={styles.sendButton}
                            id="send-btn"
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}
