/* eslint-disable react-hooks/exhaustive-deps */
/*
I gotta to be honest, the emailjsCase and sendingEmail states are hacky solutions
so that the email isn't sent twice or three times
*/

import { useReducer, useState, useEffect } from 'react'
import { filterEmptyFields, isEmailValid } from '../../utils/utils'
import emailjs, { init } from '@emailjs/browser'

export const ACTIONS = {
    HANDLE_FORM: 'handle-form',
    VALIDATE_EMAIL: 'validate-email',
    SEND_FORM: 'send-form',
}

export const SEND_OPTIONS = {
    NOT_SEND: 'not-send',
    SUCCESS: 'success',
    SERVER_ERROR: 'server-error',
}

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

export default function useContact(emailjsId) {
    init(emailjsId)
    useEffect(() => {
        initialState.form = {
            user_name: localStorage.getItem('user_name') || '',
            user_email: localStorage.getItem('user_email') || '',
            message: localStorage.getItem('message') || '',
        }
        initialState.emailTyped = initialState.form.user_email ? true : false
        initialState.badFields = filterEmptyFields(initialState.form)
        initialState.validEmail = initialState.form.user_email
            ? isEmailValid(initialState.form.user_email)
            : true
        if (!isEmailValid(initialState.form.user_email)) {
            initialState.badFields = [...initialState.badFields, 'user_email']
        }
    }, [])

    const [state, dispatcher] = useReducer(reducer, initialState)
    const [emailjsCase, setEmailjsCase] = useState(SEND_OPTIONS.NOT_SEND)
    const [sendingEmail, setSendingEmail] = useState(false)

    function reducer(state, action) {
        switch (action.type) {
            case ACTIONS.HANDLE_FORM:
                const { name, value } = action.payload

                let shortenedValue = value

                if (name === 'message' && value.length >= 1000) {
                    shortenedValue = value.slice(0, 1000)
                } else if (name !== 'message' && value.length >= 50) {
                    shortenedValue = value.slice(0, 50)
                }

                localStorage.setItem(name, shortenedValue)

                const newForm = { ...state.form, [name]: shortenedValue }
                const badFields = filterEmptyFields(newForm)

                if (!isEmailValid(newForm.user_email)) {
                    badFields.push('user_email')
                }

                if (name === 'user_email' || state.emailTyped) {
                    return {
                        ...state,
                        form: newForm,
                        emailTyped: true,
                        badFields,
                        styleBadFields: false,
                        validEmail: isEmailValid(newForm.user_email),
                    }
                }

                return {
                    ...state,
                    form: newForm,
                    badFields,
                    styleBadFields: false,
                }

            case ACTIONS.SEND_FORM:
                if (state.badFields.length > 0) {
                    return {
                        ...state,
                        styleBadFields: true,
                    }
                }

                localStorage.removeItem('user_name')
                localStorage.removeItem('user_email')
                localStorage.removeItem('message')

                action.setSendingEmail(true)

                return {
                    ...state,
                    disabledBtn: true,
                }

            default:
                return state
        }
    }

    useEffect(() => {
        if (sendingEmail) {
            emailjs
                .send('contact_service', 'contact_form', state.form)
                .then(res => {
                    setEmailjsCase(SEND_OPTIONS.SUCCESS)
                })
                .catch(err => {
                    setEmailjsCase(SEND_OPTIONS.SERVER_ERROR)
                })
        }
    }, [sendingEmail])

    return { emailjsCase, dispatcher, state, setSendingEmail }
}
