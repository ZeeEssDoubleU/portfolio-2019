import styled from "styled-components"
import Link from "next/link"
// import components
import Icon from "../../Icons/Icon"

// **********
// component
// **********

export default function Project(props) {
	return (
		<Container className={props.className}>
			<div className="project-title">{props.title}</div>
			<div className="project-description">{props.description}</div>
			{/* // TODO: convert to next link */}
			<Link
				href={`/project/${props.slug}`}
				// TODO: implement modal
				// state={{
				// 	modal: true,
				// }}
			>
				<a>
					<Icon
						className="project-ellipsis"
						name="ellipsis"
						aria-label={`show ${props.title} project info panel`}
					/>
				</a>
			</Link>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: auto 40px;
	font-size: 16px;
	color: ${({ theme }) => theme.color.font_white_light};
	padding: 4px 0;
	margin-top: 20px;
	transition: color 0.2s;
	.project-title {
		grid-row: 1/2;
		grid-column: 1/2;
	}
	.project-description {
		grid-row: 2/3;
		grid-column: 1/2;
		font-size: 14px;
		color: ${({ theme }) => theme.color.font_white_med};
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.project-ellipsis {
		grid-row: 1/3;
		grid-column: 2/3;
		align-self: center;
		justify-self: end;
		font-size: 18px;
		color: ${({ theme }) => theme.color.font_white_med};
		cursor: pointer;
	}
	&.active {
		color: ${({ theme }) => theme.color.app_green};
	}
`
