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

export default function useContact(initialState, emailjsId) {
    init(emailjsId)
    const [state, dispatcher] = useReducer(reducer, initialState)
    const [emailjsCase, setEmailjsCase] = useState(SEND_OPTIONS.NOT_SEND)
    const [sendingEmail, setSendingEmail] = useState(false)

    function reducer(state, action) {
        switch (action.type) {
            case ACTIONS.HANDLE_FORM:
                const { name, value } = action.payload

                const newForm = { ...state.form, [name]: value }
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
                    console.log(
                        `Email sent from ${state.form.user_email} succesfully`
                    )

                    setEmailjsCase(SEND_OPTIONS.SUCCESS)
                })
                .catch(err => {
                    console.log(err.text)

                    setEmailjsCase(SEND_OPTIONS.SERVER_ERROR)
                })
        }
    }, [sendingEmail])

    return { emailjsCase, dispatcher, state, setSendingEmail }
}
