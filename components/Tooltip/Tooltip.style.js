import styled from "styled-components";

const StyledTooltip = styled.div`
	cursor: default;
	background-color: var(--black);
	padding: 10px 10px;
	width: fit-content;
	border-radius: 4px;
	position: absolute;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	top: 130%;
	opacity: 0;
	transition: all 0.2s ease-in-out;
	&::before {
		content: "";
		width: 10px;
		height: 10px;
		background-color: var(--black);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&.active {
		opacity: 1;
	}
	@media only screen and (min-width: 913px) {
		background-color: var(--pink);
		&::before {
			background-color: var(--pink);
		}
	}
`;
export default StyledTooltip;
