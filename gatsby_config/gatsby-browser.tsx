import WrapRoot from "../src/GatsbyAPI/WrapRoot"
import WrapPage from "../src/GatsbyAPI/WrapPage"

export const wrapRootElement = WrapRoot
export const wrapPageElement = WrapPage

// https://github.com/gatsbyjs/gatsby/issues/7454#issuecomment-425403812
export function shouldUpdateScroll(props) {
	// DEBUG
	console.log("should scroll update props", props)
	console.log("session storage", sessionStorage)

	// saves and retrieves each page's last scroll position from session storage
	return props.getSavedScrollPosition(props.routerProps.location)
}
