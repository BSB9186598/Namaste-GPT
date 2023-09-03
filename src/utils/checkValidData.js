export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)


    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if(!isNameValid) return "Name is not valid"

    return null;
}