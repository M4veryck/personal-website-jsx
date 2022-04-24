import { ACTIONS } from '../hooks/useContact'
import styles from '../../styles/Contact/Contact.module.scss'

import { getInputData } from '../../utils/utils'

export default function Form({ dispatcher, state, setSendingEmail }) {
    const isBadFieldClass = id => {
        if (
            state.styleBadFields &&
            state.badFields.some(field => field === id)
        ) {
            return styles['bad-field']
        }

        return ''
    }

    return (
        <form className={styles['form']}>
            <label htmlFor="user_name">
                Name <span className={styles['required']}>*</span>
            </label>
            <input
                type="text"
                name="user_name"
                id="user_name"
                onChange={e => {
                    dispatcher({
                        type: ACTIONS.HANDLE_FORM,
                        payload: getInputData(e),
                    })
                }}
                value={state.form.user_name}
                className={`${styles['user-name']} ${isBadFieldClass(
                    'user_name'
                )}`}
                required
            />
            <span className={styles['field-length']}>
                {50 - state.form.user_name.length} / {50}
            </span>

            <label htmlFor="user_email">
                Email <span className={styles['required']}>*</span>
            </label>
            <input
                type="email"
                name="user_email"
                id="user_email"
                onChange={e => {
                    dispatcher({
                        type: ACTIONS.HANDLE_FORM,
                        payload: getInputData(e),
                    })
                }}
                value={state.form.user_email}
                className={`${styles['user-email']} ${isBadFieldClass(
                    'user_email'
                )}`}
                required
            />
            <div className={styles['field_l-invalid_e--container']}>
                <span
                    className={`${styles['field-length']} ${styles['email_field-length']}`}
                >
                    {50 - state.form.user_email.length} / {50}
                </span>
                {!state.validEmail && (
                    <p className={styles['invalid-email']}>Invalid Email</p>
                )}
            </div>

            <label htmlFor="message">
                Message <span className={styles['required']}>*</span>
            </label>
            <textarea
                name="message"
                id="message"
                onChange={e => {
                    dispatcher({
                        type: ACTIONS.HANDLE_FORM,
                        payload: getInputData(e),
                    })
                }}
                value={state.form.message}
                className={`${styles['message']} ${isBadFieldClass('message')}`}
                required
            />
            <span className={styles['field-length']}>
                {1000 - state.form.message.length} / {1000}
            </span>

            <p className={styles['required']}>* Required</p>

            <button
                disabled={state.disabledBtn}
                onClick={e => {
                    e.preventDefault()

                    dispatcher({
                        type: ACTIONS.SEND_FORM,
                        setSendingEmail,
                    })
                }}
                className={styles['send-btn']}
                id="send-btn"
            >
                {state.disabledBtn ? 'Processing...' : 'Send'}
            </button>
        </form>
    )
}
