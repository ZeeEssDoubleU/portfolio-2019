import WrapRoot from "./src/components/GatsbyAPI/WrapRoot"
import WrapPage from "./src/components/GatsbyAPI/WrapPage"

export const wrapRootElement = WrapRoot
export const wrapPageElement = WrapPage

// https://github.com/gatsbyjs/gatsby/issues/7454#issuecomment-425403812
export const shouldUpdateScroll = props => {
  // DEBUG
  console.log("should scroll update props", props)
  console.log("session storage", sessionStorage)

  // saves and retrieves each page's last scroll position from session storage
  return props.getSavedScrollPosition(props.routerProps.location)
}

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const transitionDelay = 0
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
//   } else {
//     const savedPosition = getSavedScrollPosition(location)
//     window.setTimeout(
//       () => window.scrollTo(...(savedPosition || [0, 0])),
//       transitionDelay
//     )
//   }
//   return false
// }
