function isEmailValid(mail) {
    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true
    }
    return false
}

const filterEmptyFields = newForm => {
    const messyEmptyFields = Object.entries(newForm).filter(
        ([field, value]) => {
            return !value
        }
    )
    return messyEmptyFields.map(([field, value]) => field)
}

const getInputData = e => {
    const { name, value } = e.target
    return { name, value }
}

export { isEmailValid, filterEmptyFields, getInputData }
