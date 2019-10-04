// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react"

// combine Init states
const initState = () => {
  if (typeof window !== "undefined") {
    return {
      navVisible: false,
      menuExpanded: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }
}

// action types
const TOGGLE_NAV = "TOGGLE_NAV"
const TOGGLE_MENU = "TOGGLE_MENU"
const WINDOW_WIDTH = "WINDOW_WIDTH"
const WINDOW_HEIGHT = "WINDOW_HEIGHT"

// action creators
export const toggleNav = (dispatch, payload) =>
  dispatch({ type: TOGGLE_NAV, payload })
export const toggleMenu = (dispatch, payload) =>
  dispatch({ type: TOGGLE_MENU, payload })

export const windowResize = (dispatch, themeContext) => {
  if (typeof window !== "undefined") {
    dispatch({ type: WINDOW_WIDTH, payload: window.innerWidth })
    dispatch({ type: WINDOW_HEIGHT, payload: window.innerHeight })
    // close mobile menu when on tablet or bigger
    if (window.innerWidth >= themeContext.tablet) {
      toggleMenu(dispatch, false)
    }
  }
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, navVisible: action.payload }
    case TOGGLE_MENU:
      return { ...state, menuExpanded: action.payload }
    case WINDOW_WIDTH:
      return { ...state, windowWidth: action.payload }
    case WINDOW_HEIGHT:
      return { ...state, windowHeight: action.payload }
    default:
      return state
  }
}

// context that stores and shares data
const StoreContext = createContext(null)

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
