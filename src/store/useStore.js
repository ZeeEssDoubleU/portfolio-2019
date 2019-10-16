// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react"
import { theme } from "../styles/theme"

// action types
const TOGGLE_NAV = "TOGGLE_NAV"
const TOGGLE_MENU = "TOGGLE_MENU"
const WINDOW_WIDTH = "WINDOW_WIDTH"
const WINDOW_HEIGHT = "WINDOW_HEIGHT"
const IS_DESKTOP = "IS_DESKTOP"
const IS_MOBILE = "IS_MOBILE"

// action creators
export const onToggleNav = (dispatch, payload) =>
  dispatch({ type: TOGGLE_NAV, payload })
export const onToggleMenu = (dispatch, payload) =>
  dispatch({ type: TOGGLE_MENU, payload })

export const onWindowResize = (dispatch, themeContext) => {
  if (typeof window !== "undefined") {
    dispatch({ type: WINDOW_WIDTH, payload: window.innerWidth })
    dispatch({ type: WINDOW_HEIGHT, payload: window.innerHeight })
    window.innerWidth < themeContext.tablet
      ? dispatch({ type: IS_MOBILE, payload: true })
      : dispatch({ type: IS_MOBILE, payload: false })
    window.innerWidth >= themeContext.desktop
      ? dispatch({ type: IS_DESKTOP, payload: true })
      : dispatch({ type: IS_DESKTOP, payload: false })
    // close mobile menu when on tablet or bigger
    if (window.innerWidth >= themeContext.tablet) {
      onToggleMenu(dispatch, false)
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
    case IS_MOBILE:
      return { ...state, isMobile: action.payload }
    case IS_DESKTOP:
      return { ...state, isDesktop: action.payload }
    default:
      return state
  }
}

// initial state
const initState =
  typeof window !== "undefined"
    ? {
        navVisible: false,
        menuExpanded: false,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        isMobile: window.innerWidth < theme.tablet,
        isDesktop: window.innerWidth >= theme.desktop,
      }
    : {} // fallback to {} so that sub states don't return null

// context that stores and shares data
const StoreContext = createContext(initState)

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
