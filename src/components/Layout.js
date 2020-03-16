import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
// import components
import Nav from "../components/Nav/Nav"
import { Background } from "./elements/Background"
// import store
import { useStore } from "../store/useStore"

// ***COMPONENT***
const Layout = ({ children, location }) => {
  const { state } = useStore()
  const { pathname } = location
  const duration = 0.3
  const slideUp = {
    initial: {
      zIndex: 2,
      y: "100%",
    },
    enter: {
      zIndex: 2,
      y: 0,
      transition: {
        duration: duration,
      },
    },
    exit: {
      zIndex: 2,
      y: "100%",
      transition: { duration: duration },
    },
  }
  const still = {
    enter: {
      zIndex: 1,
      transition: {
        duration: duration,
      },
    },
    exit: {
      zIndex: 1,
      transition: { duration: duration },
    },
  }

  return (
    <Container>
      {/* <Nav role="navigation" aria-label="main navigation" /> */}
      {!state.isMobile && <Background />}
      <AnimatePresence>
        <PageTransition
          className="framer-motion"
          key={pathname}
          variants={pathname.includes("project") ? slideUp : still}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </PageTransition>
      </AnimatePresence>
    </Container>
  )
}
export default Layout

// ***STYLES***
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

const PageTransition = styled(motion.main)`
  position: absolute;
  overflow: scroll;
  width: 100%;
  height: 100%;
`
