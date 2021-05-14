// import { TimelineLite } from "gsap/all"

// export const showSection = (target) => {
// 	const activeSection = document.querySelector(".active-section")
// 	const activeMenu = document.querySelector(".active-menu")
// 	const targetSection = document.querySelector(`.section-${target}`)
// 	const targetMenu = document.querySelector(`.menu-${target}`)

// 	const duration = 0.5

// 	const timeline = new TimelineLite()

// 	if (activeSection === targetSection) {
// 		// navigate to same page already open (do nothing)
// 		return
// 	} else if (target === "landing") {
// 		// navigate back to home
// 		if (activeSection !== null && activeMenu !== null) {
// 			activeSection.classList.remove("active-section")
// 			activeMenu.classList.remove("active-menu")
// 			timeline.to(activeSection, duration, { x: "100%" })
// 		}
// 		return
// 	} else if (!activeSection) {
// 		// navigate from home (if no section is active)
// 		targetSection.classList.add("active-section")
// 		targetMenu.classList.add("active-menu")
// 		timeline.to(targetSection, duration, { x: "0%" })
// 		return
// 	} else {
// 		// navigate to page from any other page but home
// 		if (activeSection !== null && activeMenu !== null) {
// 			activeSection.classList.remove("active-section")
// 			activeMenu.classList.remove("active-menu")
// 			targetSection.classList.add("active-section")
// 			targetMenu.classList.add("active-menu")
// 			timeline
// 				.to(activeSection, duration, { x: "100%" })
// 				.to(targetSection, duration, { x: "0%" })
// 		}
// 	}
// }
