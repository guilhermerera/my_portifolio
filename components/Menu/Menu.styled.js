import styled from "styled-components";

const StyledMenu = styled.ul`
	display: none;
	@media only screen and (min-width: 820px) {
		list-style: none;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}
`;

export default StyledMenu;
