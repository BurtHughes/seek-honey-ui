export const login = userInfo => {
    return {
        type: 'LOG_IN',
        userInfo
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}