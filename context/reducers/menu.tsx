const menu = (state, action) => {
    switch (action.type) {
        case 'MENU_IS_OPEN':
            return { ...state, menu: action.payload }
        default:
            return state
    }
}

const menuItem = (state, action) => {
    switch (action.type) {
        case 'SECTION_IS_VISIBLE':
            return { ...state, menuItem: action.payload }
        default:
            return state
    }
}

export { menu, menuItem }
