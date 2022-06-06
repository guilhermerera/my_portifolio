import styled from "styled-components";
import { MobileOnly } from "../CSS_GlobalStyle";

const StyledMobileMenu = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: var(--pink);
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: all 0.3s ease-in-out;
	pointer-events: none;
	&.active {
		opacity: 1;
		display: flex;
		pointer-events: auto;
	}
	${MobileOnly}
	li {
		list-style: none;
	}
	@media only screen and (min-width: 820opx) {
		display: none;
	}
`;

export default StyledMobileMenu;
