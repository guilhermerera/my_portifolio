import styled from "styled-components";
import { Underline } from "../CSS_GlobalStyle/index";

const StyledLogo = styled.a`
	font-family: "Comfortaa", cursive;
	color: var(--pink);
	cursor: pointer;
	font-size: 2rem;
	font-weight: 900;
	z-index: 1000;
	transition: all 0.3s ease-in-out;
	&.active {
		color: var(--black);
	}
	${Underline}
`;

export default StyledLogo;
