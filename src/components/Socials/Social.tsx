import React, { ReactElement } from "react"
import styled from "styled-components"
// import components
import Icon from "../Icons/Icon"
import { ExternalLink } from "../elements/CustomLink"

// ************
// types
// ************

interface Social_I {
	name: string
	ariaLabel: string
	href: string
}

// **********
// component
// **********

export default function Social({
	name,
	ariaLabel,
	href,
}: Social_I): ReactElement {
	return (
		<ExternalLink tabIndex={0} aria-label={ariaLabel} {...{ href }}>
			<Inner>
				<Icon {...{ name }} />
			</Inner>
		</ExternalLink>
	)
}

// **********
// styles
// **********

const Inner = styled.div`
	background: ${({ theme }) => theme.color.app_dark};
	height: 38px;
	width: 38px;
	border-radius: 50%;
	& > * {
		position: absolute;
		/* center element */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 18px;
		width: 18px;
		color: ${({ theme }) => theme.color.app_green};
	}
`
