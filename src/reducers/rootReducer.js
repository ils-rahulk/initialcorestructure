/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import themeReducer from './themeReducer';

const appReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    theme: themeReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET_ALL_DATA') {
        state = {
            auth: state.auth
        }
    }
    return appReducer(state, action)
}

export default rootReducer