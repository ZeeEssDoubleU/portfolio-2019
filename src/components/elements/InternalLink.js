// @ts-nocheck
import React from "react"
import { scrollToAnim } from "../../utils/scrollToAnim"
// import store
import { useStore, onToggleMenu } from "../../store/useStore"

const InternalLink = props => {
  const { state, dispatch } = useStore()
  const target = props.href.toLowerCase()

  return (
    <a
      className={props.className}
      href={props.external ? target : `#${target}`}
      rel={props.external ? "_blank" : null}
      target={props.external ? "noopener noreferrer" : null}
      aria-label={
        props.external
          ? `external link to ${target} project`
          : `go to ${target} section`
      }
      onClick={e => {
        if (props.external) {
          return
        } else {
          e.preventDefault()
          if (props.cancelParam) {
            if (props.cancelParam() === false) return
          }
          if (state.toggleMenu) onToggleMenu(dispatch, false)
          scrollToAnim(state.menuExpanded, `#${target}`)
          window.history.pushState({ section: target }, target, `#${target}`)
        }
      }}
    >
      {props.children}
    </a>
  )
}

export default React.memo(InternalLink)
