const path = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_PATH':
            return {
                ...state,
                currentPath:
                {
                    ...state.currentPath,
                    [action.tab]: action.path
                }
            };
        default:
            return state;
    }
}
export default path;