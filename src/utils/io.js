import { useEffect } from "react"
import "intersection-observer"

export const useIntersectionObserver = (dispatch, target, fn) => {
  useEffect(() => {
    // mount
    const io = new IntersectionObserver(
      ([entry]) => {
        // function dispatches to reducer in useStore.js
        fn(dispatch, !entry.isIntersecting)
      },
      { rootMargin: "-100px" }
    )
    io.observe(target.current)
    // unmount
    return () => io.disconnect()
  }, [dispatch, target, fn])
}
