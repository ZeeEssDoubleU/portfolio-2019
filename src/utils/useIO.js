import { useEffect } from "react"
import "intersection-observer"

export const useIntersectionObserver = (
  dispatch,
  isDesktop,
  target,
  onToggleNav
) => {
  useEffect(() => {
    // mount
    const io = new IntersectionObserver(
      ([entry]) => {
        // function dispatches to reducer in useStore.js
        if (!isDesktop) {
          onToggleNav(dispatch, !entry.isIntersecting)
        }
      },
      { rootMargin: "-100px" }
    )
    io.observe(target.current)
    // unmount
    return () => io.disconnect()
  }, [dispatch, isDesktop, target, onToggleNav])
}
