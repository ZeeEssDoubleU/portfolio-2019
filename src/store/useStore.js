import { createContext, useReducer, useContext } from "react"
import { theme } from "../styles/theme"

// ************
// action types
// ************

const TOGGLE_NAV = "TOGGLE_NAV"
const TOGGLE_MENU = "TOGGLE_MENU"
const WINDOW_WIDTH = "WINDOW_WIDTH"
const WINDOW_HEIGHT = "WINDOW_HEIGHT"
const IS_DESKTOP = "IS_DESKTOP"
const IS_MOBILE = "IS_MOBILE"
const SET_PATHNAME = "SET_PATHNAME"
const SET_PREV_PATHNAME = "SET_PREV_PATHNAME"

// ************
// action creators
// ************

export const onToggleNav = (dispatch, payload) =>
	dispatch({ type: TOGGLE_NAV, payload })
export const onToggleMenu = (dispatch, payload) =>
	dispatch({ type: TOGGLE_MENU, payload })
export const onWindowResize = (dispatch, theme) => {
	if (typeof window !== "undefined") {
		dispatch({ type: WINDOW_WIDTH, payload: window.innerWidth })
		dispatch({ type: WINDOW_HEIGHT, payload: window.innerHeight })
		window.innerWidth < theme.media.tablet
			? dispatch({ type: IS_MOBILE, payload: true })
			: dispatch({ type: IS_MOBILE, payload: false })
		window.innerWidth >= theme.media.desktop
			? dispatch({ type: IS_DESKTOP, payload: true })
			: dispatch({ type: IS_DESKTOP, payload: false })
		// close mobile menu when on tablet or bigger
		if (window.innerWidth >= theme.media.tablet) {
			onToggleMenu(dispatch, false)
		}
	}
}
export const setPrevPathname = (dispatch, payload) => {
	dispatch({ type: SET_PREV_PATHNAME, payload })
}
export const setPathname = (dispatch, payload) => {
	dispatch({ type: SET_PATHNAME, payload })
}

// ************
// reducer
// ************

const reducer = (state, action) => {
	console.log("action:", action) // ? debug

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
		case SET_PATHNAME:
			return { ...state, pathname: action.payload }
		case SET_PREV_PATHNAME:
			return { ...state, prevPathname: action.payload }
		default:
			return state
	}
}

// ************
// initial state
// ************

const initState =
	typeof window !== "undefined"
		? {
				navVisible: false,
				menuExpanded: false,
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				isMobile: window.innerWidth < theme.media.tablet,
				isDesktop: window.innerWidth >= theme.media.desktop,
				pathname: null,
				prevPathname: null,
		  }
		: {} // fallback to {} so that sub states don't return null

// ************
// crate context
// ************

const StoreContext = createContext(initState)

// ************
// hook
// ************

export const useStore = () => {
	const { state, dispatch } = useContext(StoreContext)
	return { state, dispatch }
}

// ************
// provider
// ************

export default function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}
