// @ts-nocheck
import React from "react"
import { scrollToAnim } from "../../utils/scrollToAnim"
// import store
import { useStore, onToggleMenu } from "../../store/useStore"

export const InternalLink = React.memo(props => {
  const { state, dispatch } = useStore()
  const target = props.href.toLowerCase()

  return (
    <a
      className={props.className}
      href={`#${target}`}
      aria-label={`go to ${target} section`}
      onClick={e => {
        e.preventDefault()
        if (props.cancelParam) {
          if (props.cancelParam() === false) return
        }
        if (state.toggleMenu) onToggleMenu(dispatch, false)
        scrollToAnim(state.menuExpanded, `#${target}`)
        // window.history.pushState({ section: target }, target, `#${target}`)
      }}
    >
      {props.children}
    </a>
  )
})

export const ExternalLink = React.memo(props => {
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
})
