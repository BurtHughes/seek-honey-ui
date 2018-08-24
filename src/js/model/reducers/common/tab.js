const tab = (state = {}, action) => {
    switch (action.type) {
        case 'SWITCH_TAB':
            return { ...state, currentTab: action.tab };
        default:
            return state;
    }
}
export default tab;