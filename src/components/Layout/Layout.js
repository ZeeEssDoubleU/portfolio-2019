import styled from "styled-components"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
// import components
import Background from "./Background"
// import store
import { useStore } from "../../store/useStore"

// **********
// component
// **********

export default function Layout({ children }) {
	const { pathname } = useRouter()
	const { state } = useStore()

	const duration = 0.3
	const slideUp = {
		initial: {
			position: "fixed",
			zIndex: 2,
			y: "100%",
		},
		enter: {
			position: "fixed",
			zIndex: 2,
			y: 0,
			transition: {
				duration: duration,
			},
		},
		exit: {
			position: "fixed",
			zIndex: 2,
			y: "100%",
			transition: { duration: duration },
		},
	}
	const fixed = {
		initial: {
			zIndex: 1,
		},
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
		<>
			{/* background relocates to landing.js when mobile */}
			{!state.isMobile && <Background />}
			<AnimatePresence>
				<PageTransition
					id="page-transition"
					key={pathname}
					variants={pathname.includes("project") ? slideUp : fixed}
					initial="initial"
					animate="enter"
					exit="exit"
				>
					{children}
				</PageTransition>
			</AnimatePresence>
		</>
	)
}

// **********
// styles
// **********

const PageTransition = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
`
