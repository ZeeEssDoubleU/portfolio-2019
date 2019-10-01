// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react"

// combine Init states
const initState = {
  navVisible: false,
  menuExpanded: false,
}

// context that stores and shares data
const StoreContext = createContext(initState)

const navReducer = (state, action) => {
  switch (action.type) {
    case "toggleNav":
      return { ...state, navVisible: action.payload }
    default:
      return state
  }
}
const menuReducer = (state, action) => {
  switch (action.type) {
    case "toggleMenu":
      return { ...state, menuExpanded: action.payload }
    default:
      return state
  }
}

// component to wrap upper level root component with Provider
export const StoreProvider = ({ children }) => {
  const [navVisible, dispatchNav] = useReducer(navReducer, false)
  const [menuExpanded, dispatchMenu] = useReducer(menuReducer, false)

  // Global Dispatch Function
  const dispatch = action =>
    [dispatchNav, dispatchMenu].forEach(fn => fn(action))

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

// useStore hook.  Acts as Consumer through useContext
export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext)
  return { state, dispatch }
}
