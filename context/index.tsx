import { createContext, useReducer } from 'react'

import { menu, menuItem } from './reducers/menu'

// Initial State
const initialState = {
    menu: false,
    menuItem: []
}

// Create Context
const Context = createContext<{
    state?: any
    dispatch?: React.Dispatch<any>
}>({})

// Combine Reducer Function
const combineReducers = (...reducers) => (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action)
    return state
}

// Context Provider
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(
        combineReducers(menu, menuItem),
        initialState
    )
    const value = { state, dispatch }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export { Context, Provider }
