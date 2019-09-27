// @ts-nocheck
import React, { createContext, useReducer, useContext } from "react"

// combine Init states
const initState = {
  navVisible: false,
  menuExpanded: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleNav":
      return { ...state, navVisible: action.payload }
    case "toggleMenu":
      return { ...state, menuExpanded: action.payload }
    default:
      return state
  }
}

// context that stores and shares data
const StoreContext = createContext(initState)
// const DispatchContext = createContext(null)

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
export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext)
  return { state, dispatch }
}

// export const useDispatch = dispatch => {
//   const { dispatch } = useContext(DispatchContext)
//   return dispatch
// }
