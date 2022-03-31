import Link from 'next/link'
import styles from '../../styles/Contact/Contact.module.scss'
import { validateEmail } from '../../utils/utils'
import { useRef, useState } from 'react'
import emailjs, { init, sendForm } from '@emailjs/browser'
init('iZu4cY_9HYBlPdW9q')

export default function Contact() {
    const btn = useRef(null)
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })
    const [success, setSuccess] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)

    const handleChange = e => {
        const { value, name } = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))

        if (!validateEmail(formData.user_email)) {
            setDisabled(true)
            setInvalidEmail(true)
            return
        }

        setDisabled(false)
        setInvalidEmail(false)
    }

    const sendEmail = async e => {
        e.preventDefault()

        emailjs
            .send('contact_service', 'contact_form', formData)
            .then(result => {
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: '',
                })
                setSuccess(true)
                console.log(
                    `Email sent from ${formData.user_email} succesfully`
                )
            })
            .catch(err => {
                setSuccess(false)
                console.log(error.text)
            })

        setDisabled(false)
    }

    return (
        <section className={styles.contact}>
            <h2>Contact me</h2>
            <p className={styles.desc}>
                If you are interested in <strong>hiring me</strong> or other
                inquiries, please fill up the form.
            </p>
            {success ? (
                <>
                    <p className={styles.successMessage}>
                        Email sent succesfully! <br /> I{`'`}ll be in contact
                        with you as soon as possible
                    </p>
                    <Link href="/">
                        <a className={styles.goHome}>Home</a>
                    </Link>
                </>
            ) : success === false ? (
                <p className={styles.failureMessage}>
                    Something went wrong :{`(`} <br /> Please refresh and try
                    again.
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
                    />

                    <label htmlFor="user_email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        onChange={handleChange}
                        value={formData.user_email}
                    />
                    {invalidEmail && (
                        <p className={styles.invalidEmailMsg}>Invalid Email</p>
                    )}

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        onChange={handleChange}
                        value={formData.message}
                    />

                    <button
                        disabled={disabled}
                        onClick={e => {
                            setDisabled(true)
                            sendEmail(e)
                        }}
                    >
                        Submit
                    </button>
                </form>
            )}
        </section>
    )
}
