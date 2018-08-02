export loginLoading = (loading) => {
    return {
        type: 'LOGIN_LOADING',
        data: loading
    };
}

export loginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        data: data
    };
}

export loginFailure = (err) => {
    return {
        type: 'LOGIN_FAILURE',
        data: err
    };
}