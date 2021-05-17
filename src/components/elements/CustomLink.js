import { memo } from "react"
import { scrollToAnim } from "../../utils/scrollToAnim"
// import store
import { useStore, onToggleMenu } from "../../store/useStore"

// **********
// component
// **********

export function InternalLink(props) {
	const { state, dispatch } = useStore()
	const target = props.href.toLowerCase()

	return (
		// TODO: consider using next link
		<a
			className={props.className}
			href={`#${target}`}
			aria-label={`go to ${target} section`}
			onClick={(e) => {
				e.preventDefault()
				// if cancelParam present, prevent Link from working when cancelParam === false
				if (props.cancelParam) {
					if (props.cancelParam() === false) return
				}
				if (state.menuExpanded) {
					onToggleMenu(dispatch, false)
				}
				scrollToAnim(state.menuExpanded, `#${target}`)
			}}
		>
			{props.children}
		</a>
	)
}

// **********
// component
// **********

export function ExternalLink(props) {
	const target = props.href.toLowerCase()

	return (
		<a
			className={props.className}
			href={target}
			rel="_blank"
			target="noopener noreferrer"
		>
			{props.children}
		</a>
	)
}
