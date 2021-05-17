//@ts-nocheck

import styled from "styled-components"

// import components
import Icon from "../Icons/Icon"

// **********
// component
// **********

const Button = (props) => (
	<Wrapper
		type={props.type}
		form={props.form}
		target={props.target}
		onClick={props.onClick}
	>
		<div className="action-grid">
			<div className="action-text">{props.children}</div>
			<Icon name={props.icon} className="action-icon" />
		</div>
	</Wrapper>
)
export default Button

// **********
// styles
// **********

export const Wrapper = styled.button`
	justify-self: end;
	height: 65px;
	color: ${({ theme }) => theme.color.app_blue};
	font-size: 18px;
	background: black;
	padding: 20px 24px;
	border: none;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 ${({ theme }) => theme.color.shadow_white};
	cursor: pointer;
	transition: color 0.3s;
	.action-grid {
		display: grid;
		grid-template-columns: auto 0;
		align-items: center;
		.action-text {
			margin-right: 0;
			transition: margin-right 0.3s;
		}
		.action-icon {
			justify-self: end;
			font-size: 14px;
			opacity: 0;
			transition: opacity 0.2s;
		}
	}
	&:hover {
		color: ${({ theme }) => theme.color.app_green};
		.action-text {
			margin-right: 25px;
		}
		.action-icon {
			opacity: 1;
			transition: opacity 0.2s 0.2s;
		}
	}
`
