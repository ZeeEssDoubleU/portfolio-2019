import WrapRoot from "./src/components/GatsbyAPI/WrapRoot"
import WrapPage from "./src/components/GatsbyAPI/WrapPage"

export const wrapRootElement = WrapRoot
export const wrapPageElement = WrapPage

// https://github.com/gatsbyjs/gatsby/issues/7454#issuecomment-425403812
export const shouldUpdateScroll = props => {
  // DEBUG
  console.log("should scroll update props", props)

  // saves and retrieves each page's last scroll position from session storage
  return props.getSavedScrollPosition(props.routerProps.location)
}
