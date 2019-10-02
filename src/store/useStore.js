// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react"

// combine Init states
const initState = {
  navVisible: false,
  menuExpanded: false,
}

// context that stores and shares data
const StoreContext = createContext(initState)

// action types
const TOGGLE_NAV = "TOGGLE_NAV"
const TOGGLE_MENU = "TOGGLE_MENU"

// action creators
export const toggleNav = (dispatch, payload) =>
  dispatch({ type: TOGGLE_NAV, payload })
export const toggleMenu = (dispatch, payload) =>
  dispatch({ type: TOGGLE_MENU, payload })

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, navVisible: action.payload }
    case TOGGLE_MENU:
      return { ...state, menuExpanded: action.payload }
    default:
      return state
  }
}

// component to wrap upper level root component with Provider
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

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
