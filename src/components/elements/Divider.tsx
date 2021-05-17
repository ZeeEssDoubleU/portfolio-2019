import styled from "styled-components"

// ************
// component
// ************

export default function Divider(props) {
	return <Element />
}

// ************
// styles
// ************

const Element = styled.div`
	height: 4px;
	width: 40px;
	border-radius: 2px;
	background: ${({ theme }) => theme.color.app_green};
`
