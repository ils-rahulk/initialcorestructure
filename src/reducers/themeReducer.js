// import { createStore } from 'redux'

const initialState = {
    sidebarShow: 'responsive'
}

const themeReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
    case 'set':
        return { ...state, ...rest }
    default:
        return state
    }
}

export default themeReducer