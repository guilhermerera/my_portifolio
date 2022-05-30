import styled from "styled-components";
import { useMemo, useContext } from "react";
import { MobileOnly } from "../CSS_GlobalStyle";
import { GlobalContext } from "../../contexts/global";

export default function MobileHamburguer() {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);

	function toggleMenu() {
		if (isHamburgerActive === "active") {
			setIsHamburgerActive("");
		} else {
			setIsHamburgerActive("active");
		}
	}

	const isActive = useMemo(() => isHamburgerActive, [isHamburgerActive]);

	return (
		<Div className={isActive} onClick={toggleMenu}>
			<StyledSpan className={isActive}></StyledSpan>
			<StyledSpan className={isActive}></StyledSpan>
			<StyledSpan className={isActive}></StyledSpan>
		</Div>
	);
}

const Div = styled.div`
	width: 35px;
	height: 35px;
	padding: 5px;
	border-radius: 3px;
	background-color: var(--pink);
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	position: relative;
	cursor: pointer;
	z-index: 1000;
	transition: all 0.3s ease-in-out;
	${MobileOnly}
	&.active {
		background-color: var(--black);
	}
`;

const StyledSpan = styled.span`
	width: 100%;
	height: 3px;
	border-radius: 9999px;
	background-color: var(--black);
	position: relative;
	left: 0;
	top: 0;
	bottom: 0;
	transition: all 0.3s ease-in-out;
	opacity: 1;
	&.active {
		background-color: var(--pink);
	}
	:not(:last-child) {
		margin: 0px 0px 5px 0px;
	}
	:nth-child(2).active {
		opacity: 0;

		left: -200%;
	}
	:first-child.active {
		width: 100%;
		margin: 0;
		transform: translateY(200%) rotate(225deg);
	}
	:last-child.active {
		width: 100%;
		margin: 0;
		transform: translateY(-200%) rotate(-225deg);
	}
`;
