import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router"

// TODO: create custom Link component
// include a tag
// include back option
// consider combining with other custom links

// **********
// component
// **********

export default function ProjectFooter(props) {
	const router = useRouter()

	return (
		<Container>
			<Link
				href="/"
				aria-label={`close ${props.title} project info panel`}
				onClick={(e) => {
					e.preventDefault()
					router.back()
					// TODO: implement no scroll
					// // navigate back (-1)
					// navigate(-1, {
					// 	state: { noScroll: true },
					// })
				}}
			>
				<a>Close</a>
			</Link>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	display: grid;
	grid-template-rows: 70px;
	justify-content: center;
	align-content: center;
	// TODO: make sure a tag styled right
	a {
		border: none;

		color: ${({ theme }) => theme.color.font_white_light};
		font-size: 20px;
		background: black;
		cursor: pointer;
	}
`
