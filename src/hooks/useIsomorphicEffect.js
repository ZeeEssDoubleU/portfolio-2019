import { useLayoutEffect, useEffect } from "react"

// ************
// hook
// ************

// hack to prevent useLayoutEffect warning with SSR
export const useIsomorphicEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect
